import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('holidays') 
export class Holiday {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  holiday_date: string;

  @Column()
  subscriber_id: number;
}
