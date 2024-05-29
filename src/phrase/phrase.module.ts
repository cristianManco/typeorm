import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseController } from './controller/phrase.controller';
import { Phrase } from './phrase.entity';
import { PhraseService } from './serv/phrase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phrase])],
  controllers: [PhraseController],
  providers: [PhraseService],
  exports: [PhraseService],
})
export class PhraseModule {}
