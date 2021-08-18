import { ApiProperty } from '@nestjs/swagger';
import { VendorType } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateVendorDto {

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  description?: string;

  @IsNotEmpty()
  @IsEnum(VendorType)
  @ApiProperty({enum: VendorType})
  type: VendorType;

}