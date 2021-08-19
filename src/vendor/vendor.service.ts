import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { VendorRepository } from './vendor.repository';

@Injectable()
export class VendorService {
  constructor(private readonly vendorRepository: VendorRepository) {}

  create(CreateVendorDto: CreateVendorDto) {
    return this.vendorRepository.create({ data: CreateVendorDto });
  }

  findAll() {
    return this.vendorRepository.findMany();
  }

  findOne(id: string) {
    return this.vendorRepository.findUnique({ where: { id } });
  }

  update(id: string, UpdateVendorDto: UpdateVendorDto) {
    return this.vendorRepository.update({
      where: {
        id
      },
      data: {
        ...UpdateVendorDto
      }
    })
  }

  remove(id: string) {
    return this.vendorRepository.delete({
      where: {
        id
      }
    });
  }
}
