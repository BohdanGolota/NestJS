import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { FilterNewsDto } from '../dto/filter-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {
  }

  async findAll(filterNewsDto?: FilterNewsDto): Promise<News[]> {
    const { searchTerm, publishedBefore, publishedAfter } = filterNewsDto;

    const query = this.newsRepository.createQueryBuilder('news');

    if (searchTerm) {
      query.andWhere(
        '(news.title ILIKE :searchTerm OR news.shortDescription ILIKE :searchTerm)',
        { searchTerm: `%${searchTerm}%` },
      );
    }

    if (publishedBefore) {
      query.andWhere('news.publishedAt <= :publishedBefore', { publishedBefore });
    }

    if (publishedAfter) {
      query.andWhere('news.publishedAt >= :publishedAfter', { publishedAfter });
    }

    query.andWhere('news.published = :published', { published: true });

    return await query.getMany();
  }

  async findOne(id: number): Promise<News | { status: string; statusCode: HttpStatus; message: string; }> {
    const news: News = await this.newsRepository.findOneBy({ id, published: true });
    if (!news) {
      return {
        status: 'error',
        statusCode: HttpStatus.NOT_FOUND,
        message: `News with id ${id} not found`,
      };
    }
    return news;
  }

  async create(data: Partial<News>): Promise<News> {
    const news = this.newsRepository.create(data);
    return await this.newsRepository.save(news);
  }

  async update(id: number, data: Partial<News>): Promise<News | {
    status: string;
    statusCode: HttpStatus;
    message: string
  }> {
    await this.newsRepository.update(id, data);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<any> {
    const news = await this.newsRepository.findOneBy({ id });
    if (!news) {
      return {
        status: 'error',
        statusCode: HttpStatus.NOT_FOUND,
        message: `News with id ${id} not found`,
      };
    }

    await this.newsRepository.delete(id);
    return { status: 'success', deleted: true };
  }
}
