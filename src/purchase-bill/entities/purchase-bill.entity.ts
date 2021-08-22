import { ApiProperty } from "@nestjs/swagger";

export class PurchaseBill {
  @ApiProperty({ example: 'cksap55v40000mssb41hik5dz' })
  id: string;

  @ApiProperty()
  totalCost: number;

  @ApiProperty()
  advancePaid: number;

  @ApiProperty()
  tireQuantity: number;

  @ApiProperty()
  costPaid: number;

  @ApiProperty()
  vendor_id: string;

  createdAt: Date;
  updatedAt: Date;
}
