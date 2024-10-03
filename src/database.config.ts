import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306, 
  username: 'root', 
  password: '', 
  database: 'edhub_live', 
  entities: [__dirname + '/../**/*.entity.{js,ts}'], 
  synchronize: false, 
};
