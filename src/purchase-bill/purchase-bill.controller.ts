import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePurchaseBillDto } from './dto/create-purchase-bill.dto';
import { UpdatePurchaseBillDto } from './dto/update-purchase-bill.dto';
import { PurchaseBill } from './entities/purchase-bill.entity';
import { PurchaseBillService } from './purchase-bill.service';

@ApiTags('Purchase Bill')
@Controller('purchase-bill')
export class PurchaseBillController {
  constructor(private readonly purchaseBillService: PurchaseBillService) { }

  @ApiOkResponse({
    type: PurchaseBill,
    description: 'create a purchase bill',
  })
  @Post()
  create(@Body() createPurchaseBillDto: CreatePurchaseBillDto) {
    const id = createPurchaseBillDto.id;
    return this.purchaseBillService.create(createPurchaseBillDto, id);
  }

  @ApiOkResponse({
    type: PurchaseBill,
    description: 'get all the purchase bills',
  })
  @Get()
  findAll() {
    return this.purchaseBillService.findAll();
  }
  @ApiOkResponse({
    type: PurchaseBill,
    description: 'get Purchase bill by given id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseBillService.findOne(id);
  }
  @ApiOkResponse({
    type: PurchaseBill,
    description: 'update Purchase bill by given id',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseBillDto: UpdatePurchaseBillDto) {
    return this.purchaseBillService.update(id, updatePurchaseBillDto);
  }

  @ApiOkResponse({
    type: PurchaseBill,
    description: 'delete Purchase bill by given id',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseBillService.remove(id);
  }
}
