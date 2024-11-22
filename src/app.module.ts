import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterUsageModule } from './water_usage/water_usage.module';

@Module({
  imports: [WaterUsageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
