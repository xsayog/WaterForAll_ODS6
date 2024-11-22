import { Controller, Post, Body } from '@nestjs/common';
import { WaterUsageService } from './water_usage.service';
import { CreateWaterUsageDto } from './dto/create-water_usage.dto';

@Controller('water-usage')
export class WaterUsageController {
  constructor(private readonly waterUsageService: WaterUsageService) {}

  @Post()
  create(@Body() createWaterUsageDto: CreateWaterUsageDto) {
    return this.waterUsageService.create(createWaterUsageDto);
  }
}
