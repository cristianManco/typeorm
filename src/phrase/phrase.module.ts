import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseService } from './phrase.service';
import { PhraseController } from './phrase.controller';
import { Phrase } from './phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phrase])],
  providers: [PhraseService],
  controllers: [PhraseController],
})
export class PhraseModule {}
