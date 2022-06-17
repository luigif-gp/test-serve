import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':user')
  getUserRepos(@Param() params): string {
    return this.appService.getUserRepos(params);
  }
  @Get(':user/:repo')
  getRepo(@Param() params): string {
    return this.appService.getRepo(params);
  }
  @Get(':user/:repo/:search')
  getRepoData(@Param() params) {
    return this.appService.getRepoData(params);
  }
}
