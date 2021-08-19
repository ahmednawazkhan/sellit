import { PartialType } from '@nestjs/swagger';
import { CreateVendorDto } from './create-vendor.dto';

// export type UpdateItemFileDto = Partial<CreateItemFileDto>

export class UpdateVendorDto extends PartialType(CreateVendorDto) {}