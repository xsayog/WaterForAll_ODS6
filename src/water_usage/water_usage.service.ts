import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterUsage } from './water_usage.schema';
import { CreateWaterUsageDto } from './dto/create-water_usage.dto';

@Injectable()
export class WaterUsageService {
  constructor(@InjectModel(WaterUsage.name) private waterUsageModel: Model<WaterUsage>) {}

  async create(createWaterUsageDto: CreateWaterUsageDto): Promise<WaterUsage> {
    const createdWaterUsage = new this.waterUsageModel(createWaterUsageDto);
    return createdWaterUsage.save();
  }

  async findAll(): Promise<WaterUsage[]> {
    return this.waterUsageModel.find().exec();
  }
}