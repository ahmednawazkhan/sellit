import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseBillService } from './purchase-bill.service';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PurchaseBill } from './entities/purchase-bill.entity';

@ApiTags('Purchase Bill')
@Controller('purchase-bill')
export class PurchaseBillController {
  constructor(private readonly purchaseBillService: PurchaseBillService) { }
  @ApiOkResponse({
    type: PurchaseBill,
    description: 'get purchase bill by given id'
  })
  @Post()
  create(@Body() createPurchaseBillDto: CreatePurchaseBillDto) {
    return this.purchaseBillService.create(createPurchaseBillDto);
  }

  @ApiOkResponse({
    isArray: true,
    type: PurchaseBill,
    description: "get all purchase bills"
  })

  @Get()
  findAll() {
    return this.purchaseBillService.findAll();
  }

  @ApiOkResponse({
    type: PurchaseBill,
    description: "get purchase bill by given id"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseBillService.findOne(id);
  }

  @ApiOkResponse({
    type: PurchaseBill,
    description: "update purchase bill by given id"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseBillDto: UpdatePurchaseBillDto) {
    return this.purchaseBillService.update(id, updatePurchaseBillDto);
  }

  @ApiOkResponse({
    type: PurchaseBill,
    description: 'delete purchase bill by given id'
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseBillService.remove(id);
  }
}
