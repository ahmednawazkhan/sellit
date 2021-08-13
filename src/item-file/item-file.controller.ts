import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemFileService } from './item-file.service';
import { CreateItemFileDto } from './dto/create-item-file.dto';
import { UpdateItemFileDto } from './dto/update-item-file.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { TireItemFile } from './entities/item-file.entity';

@Controller('item-file')
export class ItemFileController {
  constructor(private readonly itemFileService: ItemFileService) {}

  @ApiOkResponse({
    type: TireItemFile,
    description: 'get item-file by given id'
  })
  @Post()
  create(@Body() createItemFileDto: CreateItemFileDto) {
    return this.itemFileService.create(createItemFileDto);
  }

  @ApiOkResponse({
    isArray: true,
    type: TireItemFile,
    description: "get all tire item files"
  })
  @Get()
  findAll() {
    return this.itemFileService.findAll();
  }

  @ApiOkResponse({
    type: TireItemFile,
    description: 'get item-file by given id'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemFileService.findOne(id);
  }

  @ApiOkResponse({
    type: TireItemFile,
    description: 'updated tire item file with given id'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemFileDto: UpdateItemFileDto) {
    return this.itemFileService.update(id, updateItemFileDto);
  }

  @ApiOkResponse({
    type: TireItemFile,
    description: 'delete tire item file with given id'
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemFileService.remove(id);
  }
}
