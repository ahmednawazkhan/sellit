import { Vendor, VendorType } from '@prisma/client';
import { CreateVendorDto } from 'src/vendor/dto/create-vendor.dto';

export const createVendorMock: CreateVendorDto = {
  name: 'Vendor One',
  description: 'Some description',
  type: VendorType.LOCAL,
};
