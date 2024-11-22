import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterUsage } from './water_usage.model';
import { CreateWaterUsageDto } from './dto/create-water_usage.dto';

@Injectable()
export class WaterUsageService {
  constructor(
    @InjectModel(WaterUsage.name)
    private readonly waterUsageModel: Model<WaterUsage>,
  ) {}

  async create(createWaterUsageDto: CreateWaterUsageDto): Promise<WaterUsage> {
    const createdWaterUsage = new this.waterUsageModel(createWaterUsageDto);
    return createdWaterUsage.save();
  }

  async findAll(
    userId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<WaterUsage[]> {
    return this.waterUsageModel
      .find({
        userId,
        readingDate: { $gte: startDate, $lte: endDate },
      })
      .exec();
  }

  async checkForAlerts(userId: string): Promise<string> {
    const usages = await this.waterUsageModel
      .find({ userId })
      .sort({ readingDate: -1 })
      .limit(2)
      .exec();
    if (usages.length < 2) {
      return 'Not enough data to generate alerts';
    }
    const [currentMonth, lastMonth] = usages;
    if (currentMonth.amount > lastMonth.amount) {
      return 'Alert: High water consumption detected!';
    }
    return 'Water consumption is within normal limits';
  }
}
