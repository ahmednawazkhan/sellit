import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePurchaseBillDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    totalCost: number;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    advance:number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    paidAmount:number;

    /* Should we be sending it in API or auto generate it*/
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    remaining:number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    quantity: number;


}
