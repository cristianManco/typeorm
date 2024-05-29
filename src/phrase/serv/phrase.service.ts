import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Phrase } from '../phrase.entity';

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(Phrase)
    private phraseRepository: Repository<Phrase>,
  ) {}

  async findAll(
    search: string,
    page: number = 1,
    limit: number = 10,
    sortField: string = 'id',
    sortOrder: 'ASC' | 'DESC' = 'ASC',
  ) {
    const [result, total] = await this.phraseRepository.findAndCount({
      where: search ? { text: ILike(`%${search}%`) } : {},
      order: { [sortField]: sortOrder },
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data: result,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
}
