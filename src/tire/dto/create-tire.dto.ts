import { ApiProperty } from "@nestjs/swagger";

export class CreateTireDto {
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
}
