import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { VendorRepository } from './vendor.repository';
import { VendorService } from './vendor.service';

@Module({
  controllers: [VendorController],
  providers: [VendorService, VendorRepository]
})
export class VendorModule {}
