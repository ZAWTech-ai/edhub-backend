import { Controller, Get, Param } from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { Grammar } from './grammar.entity';
import { GrammarQuestion } from './grammar-question.entity';

@Controller('grammars')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Get()
  findAll(): Promise<Grammar[]> {
    return this.grammarService.findAllGrammars();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Grammar> {
    return this.grammarService.findGrammarWithQuestions(+id);
  }

  @Get(':id/questions')
  findQuestions(@Param('id') id: string): Promise<GrammarQuestion[]> {
    return this.grammarService.findQuestionsByGrammarId(+id);
  }
}