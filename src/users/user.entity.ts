import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rq_users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ nullable: true })
  student_number: string;

  @Column()
  role_id: number;

  @Column({ nullable: true })
  vip_id: number;

  @Column({ nullable: true })
  country_id: number;

  @Column({ nullable: true })
  email: string;

  @Column()
  username: string;

  @Column()
  pwd: string;

  @Column()
  created_time: Date;

  @Column({ nullable: true })
  expiry_time: Date;
}