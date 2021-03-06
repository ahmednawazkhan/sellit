import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PurchaseBill } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';

@Injectable()
export class PurchaseBillRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createPurchaseBillDto: CreatePurchaseBillDto) {
    return this.prisma.purchaseBill
      .create({
        data: createPurchaseBillDto,
      })
      .catch((e) => {
        throw new BadRequestException(e.message);
      });
  }

  findAll() {
    return this.prisma.purchaseBill.findMany();
  }

  findOne(id: string) {
    return this.prisma.purchaseBill
      .findUnique({
        where: { id },
        rejectOnNotFound: true,
      })
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  update(id: string, updatePurchaseBillDto: UpdatePurchaseBillDto) {
    return this.prisma.purchaseBill
      .update({
        where: {
          id,
        },
        data: {
          ...updatePurchaseBillDto,
        },
      })
      .catch((e) => {
        throw new BadRequestException(e.message);
      });
  }

  remove(id: string) {
    return this.prisma.purchaseBill
      .delete({
        where: {
          id,
        },
      })
      .catch(() => null);
  }

  removeAll() {
    return this.prisma.purchaseBill.deleteMany();
  }

  getUnPaidBills() {
    // raw query returns timestamps without Z offset
    return this.prisma.$queryRaw<
      PurchaseBill[]
    >`SELECT * FROM "PurchaseBill" WHERE "totalCost" != "costPaid";`.then(
      (bills) => {
        return bills.map((bill) => {
          bill.billDate = new Date(bill.billDate);
          bill.createdAt = new Date(bill.createdAt);
          bill.updatedAt = new Date(bill.updatedAt);
          return bill;
        });
      }
    );
  }

  async getTireInvetory(id: string) {
    return (
      await this.prisma.purchaseBill
        .findUnique({
          where: {
            id,
          },
          rejectOnNotFound: true,
          select: {
            tireInventoryItems: true,
          },
        })
        .catch((e) => {
          throw new NotFoundException(e.message);
        })
    ).tireInventoryItems;
  }

  async getTotalTiresPurchasedInMonths(month = 0) {
    const date = new Date();
    if (month === 0 || month === -1) {
      return (
        await this.prisma.purchaseBill.aggregate({
          _sum: {
            tireQuantity: true,
          },
        })
      )._sum;
    }
    return (
      await this.prisma.purchaseBill.aggregate({
        _sum: {
          tireQuantity: true,
        },
        where: {
          billDate: {
            gte: new Date(
              date.getFullYear(),
              date.getMonth() - month,
              date.getDate()
            ),
            lte: date,
          },
        },
      })
    )._sum;
  }

  async getTotalPurchaseCost(month = 0) {
    const date = new Date();
    if (month === 0 || month === -1) {
      return (
        await this.prisma.purchaseBill.aggregate({
          _sum: {
            totalCost: true,
          },
        })
      )._sum;
    } else {
      return (
        await this.prisma.purchaseBill.aggregate({
          _sum: {
            totalCost: true,
          },
          where: {
            billDate: {
              gte: new Date(
                date.getFullYear(),
                date.getMonth() - month,
                date.getDate()
              ),
              lte: date,
            },
          },
        })
      )._sum;
    }
  }

  async getNearestPayments(limit = 3) {
    // return this.prisma.$queryRaw<PurchaseBill[]>(
    //   `SELECT * FROM blog."PurchaseBill" WHERE "totalCost" > "costPaid" ORDER BY "nextPaymentDate" ASC LIMIT ${limit};`
    // );

    const allBills = await this.prisma.purchaseBill.findMany({
      orderBy: {
        nextPaymentDate: 'asc',
      },
    });

    return allBills
      .filter((bill) => bill.totalCost > bill.costPaid)
      .slice(0, limit);
  }
}
