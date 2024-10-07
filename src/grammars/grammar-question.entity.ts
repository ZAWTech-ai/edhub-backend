import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Grammar } from './grammar.entity';

@Entity('rq_grammars_questions')
export class GrammarQuestion {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column()
  grammar_id: number;

  @Column({ nullable: true })
  audio_quiz: string;

  @Column()
  type_id: number;

  @Column()
  percentage: number;

  @Column()
  directions: string;

  @Column()
  question: string;

  @Column()
  reading: string;

  @Column()
  answer: string;

  @Column({ nullable: true })
  answer_2: string;

  @Column({ nullable: true })
  answer_3: string;

  @Column({ nullable: true })
  answer_4: string;

  @Column({ nullable: true })
  answer_5: string;

  @Column({ nullable: true })
  answer_6: string;

  @Column({ nullable: true })
  answer_7: string;

  @ManyToOne(() => Grammar, grammar => grammar.questions)
  @JoinColumn({ name: 'grammar_id' })
  grammar: Grammar;
}