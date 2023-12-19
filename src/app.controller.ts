import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from './app.service';
import { Request } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getUser(): any {
    return this.appService.getUser()
  }

  @Post('/users')
  createUsers(@Body() req: Request): any {
    const {data} = req.body
    return this.appService.createUsers(data)
  }

  @Get('/lesson/:id')
  getActivityByEvaluationsUser() {
    return this.appService.getActivityByEvaluationsUser()
  }

  @Post('/lessons')
  createLessons() {
    return this.appService.createLessons()
  }

  @Post('/lessons/:id/evaluations')
  createActivityByEvaluationsLesson() {
    this.appService.createActivityByEvaluationsLesson()
  }

}
