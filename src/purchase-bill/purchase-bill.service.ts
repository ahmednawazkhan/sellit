import { Injectable } from '@nestjs/common';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';
import { PurchaseBillRepository } from './purchase-bill.repository';

@Injectable()
export class PurchaseBillService {
  constructor(private readonly purchaseBillRepository: PurchaseBillRepository) { }
  create(createPurchaseBillDto: CreatePurchaseBillDto) {
    return this.purchaseBillRepository.create({ data: createPurchaseBillDto });
  }

  findAll() {
    return this.purchaseBillRepository.findMany();
  }

  findOne(id: string) {
    return this.purchaseBillRepository.findUnique({ where: { id } });
  }

  update(id: string, updatePurchaseBillDto: UpdatePurchaseBillDto) {
    return this.purchaseBillRepository.update({
      where: {
        id
      },
      data: {
        ...updatePurchaseBillDto
      }
    });
  }

  remove(id: string) {
    return this.purchaseBillRepository.delete({
      where: {
        id
      }
    });
  }
}
