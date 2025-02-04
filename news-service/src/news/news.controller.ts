import { Body, Controller, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NewsService } from './news.service';
import { News } from './news.entity';
import { FilterNewsDto } from '../dto/filter-news.dto';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern({ cmd: 'get_news_list' })
  getNewsList(filterNewsDto?: FilterNewsDto) {
    return this.newsService.findAll(filterNewsDto);
  }

  @MessagePattern({ cmd: 'find_news' })
  findNews(data: { id: number }) {
    console.log(data);
    return this.newsService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_news' })
  createNews(data: Partial<News>) {
    return this.newsService.create(data);
  }

  @MessagePattern({ cmd: 'update_news' })
  updateNews(data: { id: number } & Partial<News>) {
    return this.newsService.update(data.id, data);
  }

  @MessagePattern({ cmd: 'remove_news' })
  deleteNews(data: { id: number }) {
    return this.newsService.remove(data.id);
  }
}
