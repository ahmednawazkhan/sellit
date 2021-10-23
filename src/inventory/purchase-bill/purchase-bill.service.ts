import { Injectable } from '@nestjs/common';
import { TireInventoryRepository } from '../tire-inventory/tire-inventory.repository';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';
import { PurchaseBillRepository } from './purchase-bill.repository';

@Injectable()
export class PurchaseBillService {
  constructor(
    private readonly purchaseBillRepository: PurchaseBillRepository,
    private readonly tireInventoryRepository: TireInventoryRepository
  ) {}

  create(createPurchaseBillDto: CreatePurchaseBillDto) {
    // FIXME: total cost should not exceed cost paid
    return this.purchaseBillRepository.create(createPurchaseBillDto);
  }

  findAll() {
    return this.purchaseBillRepository.findAll();
  }

  findOne(id: string) {
    return this.purchaseBillRepository.findOne(id);
  }

  update(id: string, updatePurchaseBillDto: UpdatePurchaseBillDto) {
    // FIXME: total cost should not exceed cost paid
    return this.purchaseBillRepository.update(id, updatePurchaseBillDto);
  }

  remove(id: string) {
    return this.purchaseBillRepository.remove(id);
  }

  removeAll() {
    return this.purchaseBillRepository.removeAll();
  }

  getUnPaidBills() {
    return this.purchaseBillRepository.getUnPaidBills();
  }

  getTireInventory(id: string) {
    return this.purchaseBillRepository.getTireInvetory(id);
  }

  async getRemainingTires(id: string) {
    const tireQuantity = (await this.tireInventoryRepository.countQuantity(id))
      .quantity;
    const totalQuantity = (await this.purchaseBillRepository.findOne(id))
      .tireQuantity;

    return totalQuantity - tireQuantity;
  }

  getTotalTires(month: number) {
    return this.purchaseBillRepository.getTotalTires(month);
  }

  getTotalCost(month: number) {
    return this.purchaseBillRepository.getTotalPurchaseCost(month);
  }

  getNearestPayments(numberOfpayments?: number) {
    return this.purchaseBillRepository.getNearestPayments(numberOfpayments);
  }
}
