import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTireInventoryDto } from './dto/create-tire.dto';
import { UpdateTireInventoryDto } from './dto/update-tire.dto';


@Injectable()
export class TireInventoryRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(createTireInventoryDto: CreateTireInventoryDto) {
    return this.prisma.tireInventoryEntity.create({
      data: createTireInventoryDto
    }
    ).catch((e) => {
      throw new BadRequestException(e.message);
    });
  }

  findAll() {
    return this.prisma.tireInventoryEntity.findMany();
  }

  findOne(id: string) {
    return this.prisma.tireInventoryEntity
      .findUnique({
        where: { id },
        rejectOnNotFound: true,
      })
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  update(id: string, updateTireInventoryDto: UpdateTireInventoryDto) {
    return this.prisma.tireInventoryEntity.update({
      where: {
        id,
      },
      data: {
        ...updateTireInventoryDto,
      },
    }).catch((e) => {
      throw new BadRequestException(e.message);
    });
  }

  remove(id: string) {
    return this.prisma.tireInventoryEntity
      .delete({
        where: {
          id,
        },
      })
      .catch((_) => { });
  }

  removeAll() {
    return this.prisma.tireInventoryEntity.deleteMany();
  }
}
