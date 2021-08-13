import { Injectable } from '@nestjs/common';
import { CreateItemFileDto } from './dto/create-item-file.dto';
import { UpdateItemFileDto } from './dto/update-item-file.dto';
import { ItemFileRepository } from './item-file.repository';

@Injectable()
export class ItemFileService {
  constructor(private readonly itemFileRepository: ItemFileRepository) {}

  create(createItemFileDto: CreateItemFileDto) {
    return this.itemFileRepository.create({ data: createItemFileDto });
  }

  findAll() {
    return this.itemFileRepository.findMany();
  }

  findOne(id: string) {
    return this.itemFileRepository.findUnique({ where: { id } });
  }

  update(id: string, updateItemFileDto: UpdateItemFileDto) {
    return this.itemFileRepository.update({
      where: {
        id
      },
      data: {
        ...updateItemFileDto
      }
    })
  }

  remove(id: string) {
    return this.itemFileRepository.delete({
      where: {
        id
      }
    });
  }
}
