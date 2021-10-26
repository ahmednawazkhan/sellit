import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTireInventoryDto } from './dto/create-tire-inventory.dto';
import { UpdateTireInventoryDto } from './dto/update-tire-inventory.dto';
import { TireInventory } from './entities/tire-inventory.entity';
import { TireInventoryService } from './tire-inventory.service';

@ApiTags('Tire Inventory')
@Controller('tire-inventory')
export class TireInventoryController {
  constructor(private readonly tireInventoryService: TireInventoryService) {}

  @ApiOkResponse({
    type: TireInventory,
    description: 'create a  new tire inventory entity',
  })
  @Post()
  async create(@Body() createTireInventoryDto: CreateTireInventoryDto) {
    return this.tireInventoryService.create(createTireInventoryDto);
  }

  @ApiOkResponse({
    isArray: true,
    type: TireInventory,
    description: 'get all the tire inventory entities',
  })
  @Get()
  findAll() {
    return this.tireInventoryService.findAll();
  }

  // FIXME: check if works then modify others
  @ApiOkResponse({
    schema: {
      properties: {
        quantity: {
          type: 'number',
        },
      },
    },
    description: 'get the totla no of tires',
  })
  @Get('/total-tires')
  getTotalTires() {
    return this.tireInventoryService.getTotalTires();
  }

  @ApiOkResponse({
    type: TireInventory,
    description: 'get the tire inventory entity by given id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tireInventoryService.findOne(id);
  }

  @ApiOkResponse({
    type: TireInventory,
    description: 'update the tire inventory entity by given id',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTireInventoryDto: UpdateTireInventoryDto
  ) {
    return this.tireInventoryService.update(id, updateTireInventoryDto);
  }

  @ApiOkResponse({
    type: TireInventory,
    description: 'delete the tire inventory entity by given id',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tireInventoryService.remove(id);
  }

  @ApiOkResponse({
    schema: {
      properties: {
        quantity: {
          type: 'number',
        },
      },
    },
    description: 'get the total quantity of tires for a  given purchase id',
  })
  @Get('/purchase-bill/:id/tire/quantity')
  totalQuantity(@Param('id') purchaseId: string) {
    return this.tireInventoryService.totalQuantity(purchaseId);
  }

  @ApiOkResponse({
    schema: {
      properties: {
        quantity: {
          type: 'number',
        },
      },
    },
    description: 'get the total quantity of tires for a  given itemfile id',
  })
  @Get('/itemfile/:id/tire/quantity')
  totalQuantityItemFile(@Param('id') itemFileId: string) {
    return this.tireInventoryService.totalQuantityItemFile(itemFileId);
  }

  @ApiOkResponse({
    type: TireInventory,
    description: 'get the purchase bill  for a tire inventory id',
  })
  @Get('/:id/purchase-bill')
  async getPurchaseBill(@Param('id') id: string) {
    return this.tireInventoryService.getPurchaseBill(id);
  }

  @ApiOkResponse({
    type: TireInventory,
    description: 'get the vendor from which a given tire was bought',
  })
  @Get('/:id/vendor')
  getVendor(@Param('id') itemFileId: string) {
    return this.tireInventoryService.getVendor(itemFileId);
  }
}
