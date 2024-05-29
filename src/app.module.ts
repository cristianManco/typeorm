import { Module } from '@nestjs/common';
import config from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseModule } from './phrase/phrase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.db,
      autoLoadEntities: true,
      synchronize: true
    }),
    PhraseModule,
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}