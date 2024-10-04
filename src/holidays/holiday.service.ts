import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidayService {
  constructor(
    @InjectRepository(Holiday)
    private holidayRepository: Repository<Holiday>,
  ) {}

  findAll(): Promise<Holiday[]> {
    return this.holidayRepository.find();
  }

  findOne(id: number): Promise<Holiday> {
    return this.holidayRepository.findOneBy({ id });
  }

  createHoliday(holidayData: Partial<Holiday>): Promise<Holiday> {
    const holiday = this.holidayRepository.create(holidayData);
    return this.holidayRepository.save(holiday);
  }

  async remove(id: number): Promise<void> {
    await this.holidayRepository.delete(id);
  }
}
