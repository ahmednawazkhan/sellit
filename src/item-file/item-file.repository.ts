import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemFileDto } from './dto/create-item-file.dto';
import { UpdateItemFileDto } from './dto/update-item-file.dto';

@Injectable()
export class ItemFileRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createItemFileDto: CreateItemFileDto) {
    return this.prisma.tireItemFile.create({ data: createItemFileDto });
  }

  findAll() {
    return this.prisma.tireItemFile.findMany();
  }

  findOne(id: string) {
    return this.prisma.tireItemFile
      .findUnique({ where: { id }, rejectOnNotFound: true })
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  update(id: string, updateItemFileDto: UpdateItemFileDto) {
    return this.prisma.tireItemFile.update({
      where: {
        id,
      },
      data: {
        ...updateItemFileDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.tireItemFile
      .delete({
        where: {
          id,
        },
      })
      .catch((_) => {});
  }

  removeAll() {
    return this.prisma.tireItemFile.deleteMany();
  }
}
