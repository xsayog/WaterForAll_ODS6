import { Module } from '@nestjs/common';
import { WaterUsageController } from './water_usage.controller';
import { WaterUsageService } from './water_usage.service';
import { WaterUsageService } from './water_usage.service';
import { WaterUsageController } from './water_usage.controller';

@Module({
  controllers: [WaterUsageController],
  providers: [WaterUsageService]
})
export class WaterUsageModule {}
