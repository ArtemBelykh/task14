import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getUser(): any {
    return this.appService.getUser()
  }

  @Post('/users')
  createActivity(): any {
    return this.appService.createActivity()
  }

  @Get('/lesson/:id')
  getActivityByEvaluationsUser() {
    return this.appService.getActivityByEvaluationsUser()
  }

  @Post('/lessons')
  getLessons() {
    return this.appService.getLessons()
  }

  @Post('/lessons/:id/evaluations')
  createActivityByEvaluationsLesson() {
    this.appService.createActivityByEvaluationsLesson()
  }

}
