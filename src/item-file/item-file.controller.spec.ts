import { Test, TestingModule } from '@nestjs/testing';
import { ItemFileController } from './item-file.controller';
import { ItemFileService } from './item-file.service';

describe('ItemFileController', () => {
  let controller: ItemFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemFileController],
      providers: [ItemFileService],
    }).compile();

    controller = module.get<ItemFileController>(ItemFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
