import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WaterUsage extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  readingDate: Date;
}

export const WaterUsageSchema = SchemaFactory.createForClass(WaterUsage);
