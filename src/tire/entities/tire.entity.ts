import { ApiProperty } from "@nestjs/swagger";

export class Tire {

  @ApiProperty({ example: 'cksap55v40000mssb41hik5dz' })
  id: string;

  @ApiProperty()
  itemFileId: string;

  @ApiProperty()
  dateOfManufacture: Date;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  sellingPrice: number;

  @ApiProperty()
  purchasePrice: number;

  createdAt: Date;
  updatedAt: Date;


}
