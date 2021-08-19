import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseBillController } from './purchase-bill.controller';
import { PurchaseBillService } from './purchase-bill.service';

describe('PurchaseBillController', () => {
  let controller: PurchaseBillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseBillController],
      providers: [PurchaseBillService],
    }).compile();

    controller = module.get<PurchaseBillController>(PurchaseBillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
