import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterUsageController } from './water_usage.controller';
import { WaterUsageService } from './water_usage.service';
import { WaterUsage, WaterUsageSchema } from './water_usage.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WaterUsage.name, schema: WaterUsageSchema },
    ]),
  ],
  controllers: [WaterUsageController],
  providers: [WaterUsageService],
})
export class WaterUsageModule {}
