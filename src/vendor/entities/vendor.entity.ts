import { ApiProperty } from '@nestjs/swagger';
import { VendorType } from '@prisma/client';

export class Vendor {
  @ApiProperty({example: 'cksap55v40000mssb41hik5dz'})
  id: string;

  @ApiProperty({enum: VendorType})
  brand: VendorType;
  
  @ApiProperty()
  name: string;

  createdAt: Date;
  updatedAt: Date;
}
