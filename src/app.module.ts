import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service'; 
import { typeOrmConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
