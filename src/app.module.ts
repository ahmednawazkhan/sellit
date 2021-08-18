import { Module } from '@nestjs/common';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule } from '@nestjs/config';
import { ItemFileModule } from './item-file/item-file.module';
import config from './configs/config';
import { PrismaModule } from './prisma/prisma.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ItemFileModule,
    VendorModule,
    PrismaModule,
  ],
  providers: [DateScalar],
})
export class AppModule {}
