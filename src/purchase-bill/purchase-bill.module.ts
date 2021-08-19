import { Module } from '@nestjs/common';
import { PurchaseBillService } from './purchase-bill.service';
import { PurchaseBillController } from './purchase-bill.controller';
import { PurchaseBillRepository } from './purchase-bill.repository';

@Module({
  controllers: [PurchaseBillController],
  providers: [PurchaseBillService, PurchaseBillRepository]
})
export class PurchaseBillModule { }
