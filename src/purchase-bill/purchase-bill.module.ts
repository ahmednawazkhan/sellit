import { Module } from '@nestjs/common';
import { PurchaseBillController } from './purchase-bill.controller';
import { PurchaseBillRepository } from './purchase-bill.repository';
import { PurchaseBillService } from './purchase-bill.service';

@Module({
  controllers: [PurchaseBillController],
  providers: [PurchaseBillService, PurchaseBillRepository]
})
export class PurchaseBillModule { }
