import { Module } from '@nestjs/common';
import { ItemFileService } from './item-file.service';
import { ItemFileController } from './item-file.controller';
import { ItemFileRepository } from './item-file.repository';

@Module({
  controllers: [ItemFileController],
  providers: [ItemFileService, ItemFileRepository]
})
export class ItemFileModule {}
