import { IsDate, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VendorType } from '@prisma/client';


export class CreateVendorDto{
    @ApiProperty({enum: VendorType})
    @IsNotEmpty()
    @IsEnum(VendorType)
    type: VendorType;

    @ApiProperty()
    @IsNotEmpty()
    name: string;
}