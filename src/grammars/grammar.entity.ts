import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GrammarQuestion } from './grammar-question.entity';

@Entity('rq_grammars')
export class Grammar {
  @PrimaryGeneratedColumn()
  grammar_id: number;

  @Column()
  level_id: number;

  @Column()
  mode: number;

  @Column({ nullable: true })
  uri: string;

  @Column()
  quiztime: number;

  @Column()
  allow_expiry: number;

  @Column({ nullable: true })
  type_id: number;

  @Column()
  subject: string;

  @Column({ nullable: true })
  level: string;

  @Column({ nullable: true })
  tags: string;

  @Column()
  random: number;

  @Column({ nullable: true })
  random_options: string;

  @Column()
  created_time: Date;

  @Column()
  last_updated: Date;

  @Column()
  status: number;

  @OneToMany(() => GrammarQuestion, question => question.grammar)
  questions: GrammarQuestion[];
}