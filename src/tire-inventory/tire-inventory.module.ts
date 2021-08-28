import { Module } from '@nestjs/common';
import { TireInventoryController } from './tire-inventory.controller';
import { TireInventoryRepository } from './tire-inventory.repository';
import { TireInventoryService } from './tire-inventory.service';

@Module({
  controllers: [TireInventoryController],
  providers: [TireInventoryService, TireInventoryRepository],
})
export class TireInventoryModule {}
