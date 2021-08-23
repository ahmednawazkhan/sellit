import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
import { Tire } from './entities/tire.entity';
import { TireService } from './tire.service';

@ApiTags('Tire')
@Controller('tire')
export class TireController {
  constructor(private readonly tireService: TireService) { }

  @ApiOkResponse({
    type: Tire,
    description: 'create a  new tire',
  })
  @Post()
  create(@Body() createTireDto: CreateTireDto) {
    return this.tireService.create(createTireDto);
  }

  @ApiOkResponse({
    type: Tire,
    description: 'get all the tires',
  })
  @Get()
  findAll() {
    return this.tireService.findAll();
  }
  @ApiOkResponse({
    type: Tire,
    description: 'get the tire by given id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tireService.findOne(id);
  }

  @ApiOkResponse({
    type: Tire,
    description: 'update the tire by given id',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTireDto: UpdateTireDto) {
    return this.tireService.update(id, updateTireDto);
  }

  @ApiOkResponse({
    type: Tire,
    description: 'delete the tire by given id',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tireService.remove(id);
  }
}
