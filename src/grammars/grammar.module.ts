import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grammar } from './grammar.entity';
import { GrammarQuestion } from './grammar-question.entity';
import { GrammarController } from './grammar.controller';
import { GrammarService } from './grammar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grammar, GrammarQuestion])],
  controllers: [GrammarController],
  providers: [GrammarService],
})
export class GrammarModule {}