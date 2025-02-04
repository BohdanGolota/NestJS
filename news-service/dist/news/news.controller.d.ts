import { NewsService } from './news.service';
import { News } from './news.entity';
import { FilterNewsDto } from '../dto/filter-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    getNewsList(filterNewsDto?: FilterNewsDto): Promise<News[]>;
    findNews(data: {
        id: number;
    }): Promise<News | {
        status: string;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createNews(data: Partial<News>): Promise<News>;
    updateNews(data: {
        id: number;
    } & Partial<News>): Promise<News | {
        status: string;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    deleteNews(data: {
        id: number;
    }): Promise<any>;
}
