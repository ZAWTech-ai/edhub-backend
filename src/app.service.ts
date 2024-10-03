import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async testDatabaseConnection() {
    try {
      const result = await this.connection.query('SELECT 1 + 1 AS result');
      return { message: 'Database connection successful', result };
    } catch (error) {
      return { message: 'Database connection failed', error };
    }
  }
}
