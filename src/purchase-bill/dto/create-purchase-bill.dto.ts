import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreatePurchaseBillDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  totalCost: number;

  @ApiProperty()
  @IsNotEmpty()
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
  vendor_id: string;

}

