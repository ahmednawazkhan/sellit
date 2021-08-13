import { Test, TestingModule } from '@nestjs/testing';
import { ItemFileService } from './item-file.service';

describe('ItemFileService', () => {
  let service: ItemFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemFileService],
    }).compile();

    service = module.get<ItemFileService>(ItemFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
