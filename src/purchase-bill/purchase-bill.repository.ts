import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';


@Injectable()
export class PurchaseBillRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(createpurchaseBillDto: CreatePurchaseBillDto) {
    const vendor_id = createpurchaseBillDto.vendor_id;
    return this.prisma.purchaseBill.create({
      data: {
        ...createpurchaseBillDto,
        vendor_id: vendor_id
      }
    }
    );
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
    return this.prisma.purchaseBill.update({
      where: {
        id,
      },
      data: {
        ...updatePurchaseBillDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.purchaseBill
      .delete({
        where: {
          id,
        },
      })
      .catch((_) => { });
  }

  removeAll() {
    return this.prisma.purchaseBill.deleteMany();
  }
}
