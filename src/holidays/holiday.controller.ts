import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { Holiday } from './holiday.entity';

@Controller('holidays')
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Get()
  findAll(): Promise<Holiday[]> {
    return this.holidayService.findAll();
  } 

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Holiday> {
    return this.holidayService.findOne(+id);
  }

  @Post()
  create(@Body() holidayData: Partial<Holiday>): Promise<Holiday> {
    return this.holidayService.createHoliday(holidayData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.holidayService.remove(+id);
  }
}
