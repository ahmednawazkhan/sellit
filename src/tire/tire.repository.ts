import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';


@Injectable()
export class TireRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(createTireDto: CreateTireDto) {
    return this.prisma.tire.create({
      data: createTireDto
    }
    ).catch((e) => {
      throw new BadRequestException(e.message);
    });
  }

  findAll() {
    return this.prisma.tire.findMany();
  }

  findOne(id: string) {
    return this.prisma.tire
      .findUnique({
        where: { id },
        rejectOnNotFound: true,
      })
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  update(id: string, updateTireDto: UpdateTireDto) {
    return this.prisma.tire.update({
      where: {
        id,
      },
      data: {
        ...updateTireDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.tire
      .delete({
        where: {
          id,
        },
      })
      .catch((_) => { });
  }

  removeAll() {
    return this.prisma.tire.deleteMany();
  }
}
