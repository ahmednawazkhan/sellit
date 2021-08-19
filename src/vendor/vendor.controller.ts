import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Vendor } from './entities/vendor.entity';

@ApiTags('Vendor')
@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) { }
  @ApiOkResponse({
    type: Vendor,
    description: 'create a new vendor'
  })
  @Post()
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorService.create(createVendorDto);
  }
  @ApiOkResponse({
    isArray: true,
    type: Vendor,
    description: "get all vendors"
  })
  @Get()
  findAll() {
    return this.vendorService.findAll();
  }

  @ApiOkResponse({
    type: Vendor,
    description: 'get vendor by given id'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorService.findOne(id);
  }

  @ApiOkResponse({
    type: Vendor,
    description: 'updated vendor with given id'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorService.update(id, updateVendorDto);
  }

  @ApiOkResponse({
    type: Vendor,
    description: 'delete vendor with given id'
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorService.remove(id);
  }

}