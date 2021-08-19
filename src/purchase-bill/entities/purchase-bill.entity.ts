import { ApiProperty } from "@nestjs/swagger";

//Cost should be String or Number
export class PurchaseBill {

    @ApiProperty({ example: 'cksap55v40000mssb41hik5dz' })
    id: string;

    @ApiProperty()
    totalCost: number;

    @ApiProperty()
    advance: number;

    @ApiProperty()
    paidAmount: number;

    @ApiProperty()
    remaining: number;

    @ApiProperty()
    quantity: number;

    createdAt: Date;
    updatedAt: Date;
}
