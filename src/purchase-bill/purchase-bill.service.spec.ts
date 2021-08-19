import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseBillService } from './purchase-bill.service';

describe('PurchaseBillService', () => {
  let service: PurchaseBillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseBillService],
    }).compile();

    service = module.get<PurchaseBillService>(PurchaseBillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
