import { Module } from '@nestjs/common';
import { TireController } from './tire.controller';
import { TireRepository } from './tire.repository';
import { TireService } from './tire.service';

@Module({
  controllers: [TireController],
  providers: [TireService, TireRepository]
})
export class TireModule { }
