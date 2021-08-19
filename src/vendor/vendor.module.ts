import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import {  VendorController} from './vendor.controller';
import { VendorRepository } from './vendor.repository';

@Module({
  controllers: [VendorController],
  providers: [VendorService, VendorRepository]
})
export class VendorModule {}
