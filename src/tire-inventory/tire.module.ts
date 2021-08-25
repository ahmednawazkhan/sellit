import { Module } from '@nestjs/common';
import { TireInventoryController } from './tire.controller';
import { TireInventoryRepository } from './tire.repository';
import { TireInventoryService } from './tire.service';

@Module({
  controllers: [TireInventoryController],
  providers: [TireInventoryService, TireInventoryRepository]
})
export class TireInventoryModule { }
