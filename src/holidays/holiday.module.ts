import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Holiday } from './holiday.entity';
import { HolidayController } from './holiday.controller';
import { HolidayService } from './holiday.service';


@Module({
  imports: [TypeOrmModule.forFeature([Holiday])],
  controllers: [HolidayController],
  providers: [HolidayService],
})
export class HolidayModule {}
