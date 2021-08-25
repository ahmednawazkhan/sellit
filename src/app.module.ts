import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DateScalar } from './common/scalars/date.scalar';
import config from './configs/config';
import { ItemFileModule } from './item-file/item-file.module';
import { PrismaModule } from './prisma/prisma.module';
import { PurchaseBillModule } from './purchase-bill/purchase-bill.module';
import { TireInventoryModule } from './tire-inventory/tire.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ItemFileModule,
    VendorModule,
    PrismaModule,
    PurchaseBillModule,
    TireInventoryModule,
  ],
  providers: [DateScalar],
})
export class AppModule { }
