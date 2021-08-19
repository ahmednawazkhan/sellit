import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule } from '@nestjs/config';
import { ItemFileModule } from './item-file/item-file.module';
import config from './configs/config';
import { PrismaModule } from './prisma/prisma.module';
import { VendorModule } from './vendor/vendor.module';
import { PurchaseBillModule } from './purchase-bill/purchase-bill.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ItemFileModule,
    VendorModule,
    PrismaModule,
    PurchaseBillModule
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {}
