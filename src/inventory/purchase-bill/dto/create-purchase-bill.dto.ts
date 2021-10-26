import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreatePurchaseBillDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  totalCost: number;

  @ApiProperty()
  @IsNumber()
  advancePaid: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  tireQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  costPaid: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vendorId: string;

  @ApiProperty()
  @IsDateString({ strict: true })
  nextPaymentDate?: Date;

  @ApiProperty()
  @IsDateString({ strict: true })
  billDate?: Date;

  @ApiProperty()
  @IsNumber()
  nextPaymentAmount?: number;
}
