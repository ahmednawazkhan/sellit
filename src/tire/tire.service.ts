import { Injectable } from '@nestjs/common';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
import { TireRepository } from './tire.repository';

@Injectable()
export class TireService {
  constructor(private readonly tireRepository: TireRepository) { }
  create(createTireDto: CreateTireDto) {
    return this.tireRepository.create(createTireDto);
  }

  findAll() {
    return this.tireRepository.findAll();
  }

  findOne(id: string) {
    return this.tireRepository.findOne(id);
  }

  update(id: string, updateTireDto: UpdateTireDto) {
    return this.tireRepository.update(id, updateTireDto);
  }

  remove(id: string) {
    return this.tireRepository.remove(id);
  }
}
