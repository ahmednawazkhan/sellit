import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
export class CreatePurchaseBillDto {

  @IsNotEmpty()
  @ApiProperty()
  totalCost: number;

  @ApiProperty()
  @IsNotEmpty()
  advancePaid: number;

  @ApiProperty()
  @IsNotEmpty()
  tireQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  costPaid: number;

  @ApiProperty()
  vendor_id: string;

}

