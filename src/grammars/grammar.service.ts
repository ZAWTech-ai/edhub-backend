import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grammar } from './grammar.entity';
import { GrammarQuestion } from './grammar-question.entity';

@Injectable()
export class GrammarService {
  constructor(
    @InjectRepository(Grammar)
    private grammarRepository: Repository<Grammar>,
    @InjectRepository(GrammarQuestion)
    private grammarQuestionRepository: Repository<GrammarQuestion>,
  ) {}

  async findAllGrammars(): Promise<Grammar[]> {
    return this.grammarRepository.find();
  }

  async findGrammarWithQuestions(grammarId: number): Promise<Grammar> {
    return this.grammarRepository.findOne({
      where: { grammar_id: grammarId },
      relations: ['questions'],
    });
  }

  async findQuestionsByGrammarId(grammarId: number): Promise<GrammarQuestion[]> {
    return this.grammarQuestionRepository.find({
      where: { grammar_id: grammarId },
    });
  }
}