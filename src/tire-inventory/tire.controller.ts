import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTireInventoryDto } from './dto/create-tire.dto';
import { UpdateTireInventoryDto } from './dto/update-tire.dto';
import { TireInventoryEntity } from './entities/tire.entity';
import { TireInventoryService } from './tire.service';

@ApiTags('Tire Inventory Entity')
@Controller('tire-inventory')
export class TireInventoryController {
  constructor(private readonly tireInventoryService: TireInventoryService) { }

  @ApiOkResponse({
    type: TireInventoryEntity,
    description: 'create a  new tire inventory entity',
  })
  @Post()
  create(@Body() createTireInventoryDto: CreateTireInventoryDto) {
    return this.tireInventoryService.create(createTireInventoryDto);
  }

  @ApiOkResponse({
    type: TireInventoryEntity,
    description: 'get all the tire inventory entities',
  })
  @Get()
  findAll() {
    return this.tireInventoryService.findAll();
  }
  @ApiOkResponse({
    type: TireInventoryEntity,
    description: 'get the tire inventory entity by given id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tireInventoryService.findOne(id);
  }

  @ApiOkResponse({
    type: TireInventoryEntity,
    description: 'update the tire inventory entity by given id',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTireInventoryDto: UpdateTireInventoryDto) {
    return this.tireInventoryService.update(id, updateTireInventoryDto);
  }

  @ApiOkResponse({
    type: TireInventoryEntity,
    description: 'delete the tire inventory entity by given id',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tireInventoryService.remove(id);
  }
}
