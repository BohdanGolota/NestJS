import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { FilterNewsDto } from '../dto/filter-news.dto';
export declare class NewsService {
    private newsRepository;
    constructor(newsRepository: Repository<News>);
    findAll(filterNewsDto?: FilterNewsDto): Promise<News[]>;
    findOne(id: number): Promise<News | {
        status: string;
        statusCode: HttpStatus;
        message: string;
    }>;
    create(data: Partial<News>): Promise<News>;
    update(id: number, data: Partial<News>): Promise<News | {
        status: string;
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: number): Promise<any>;
}
