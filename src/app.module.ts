import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Holiday } from './holidays/holiday.entity';
import { HolidayModule } from './holidays/holiday.module';
import { typeOrmConfig } from './database.config';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Holiday]),
    HolidayModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}