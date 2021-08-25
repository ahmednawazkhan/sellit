import { PartialType } from '@nestjs/swagger';
import { CreateTireInventoryDto } from './create-tire.dto';

export class UpdateTireInventoryDto extends PartialType(CreateTireInventoryDto) { }
