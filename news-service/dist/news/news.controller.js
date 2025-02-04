"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const news_service_1 = require("./news.service");
const filter_news_dto_1 = require("../dto/filter-news.dto");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    getNewsList(filterNewsDto) {
        return this.newsService.findAll(filterNewsDto);
    }
    findNews(data) {
        console.log(data);
        return this.newsService.findOne(data.id);
    }
    createNews(data) {
        return this.newsService.create(data);
    }
    updateNews(data) {
        return this.newsService.update(data.id, data);
    }
    deleteNews(data) {
        return this.newsService.remove(data.id);
    }
};
exports.NewsController = NewsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_news_list' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_news_dto_1.FilterNewsDto]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "getNewsList", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_news' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "findNews", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_news' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "createNews", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_news' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "updateNews", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_news' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewsController.prototype, "deleteNews", null);
exports.NewsController = NewsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
//# sourceMappingURL=news.controller.js.map