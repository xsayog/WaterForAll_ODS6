import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterUsageModule } from './water_usage/water_usage.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    WaterUsageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
