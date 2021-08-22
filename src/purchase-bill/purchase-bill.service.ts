import { Injectable } from '@nestjs/common';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';
import { PurchaseBillRepository } from './purchase-bill.repository';

@Injectable()
export class PurchaseBillService {
  constructor(private readonly purchaseBillRepository: PurchaseBillRepository) { }

  create(createPurchaseBillDto: CreatePurchaseBillDto, vendor_id: string) {
    return this.purchaseBillRepository.create(createPurchaseBillDto, vendor_id);
  }

  findAll() {
    return this.purchaseBillRepository.findAll();
  }

  findOne(id: string) {
    return this.purchaseBillRepository.findOne(id);
  }

  update(id: string, updatePurchaseBillDto: UpdatePurchaseBillDto) {
    return this.purchaseBillRepository.update(id, updatePurchaseBillDto);
  }

  remove(id: string) {
    return this.purchaseBillRepository.remove(id);
  }
}
