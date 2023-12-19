import { Controller, Get, Param, Post, Req } from '@nestjs/common'
import { AppService } from './app.service';
import { Request } from 'express';
import { Users } from './entities/users.entity'
import { Lessons } from './entities/lessons.entity'
import { LessonDto } from './dto/lesson.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getUser(): Promise<Users[]> {
    return this.appService.getUser();
  }

  @Post('/user')
  createUsers(@Req() req: Request): Promise<Users> {
    return this.appService.createUsers(req.body);
  }

  @Get('/lesson/:id')
  getLessonById() {
    return this.appService.getLessonById();
  }

  @Post('/lessons')
  createLessons(@Req() req: Request) {
    return this.appService.createLessons(req.body);
  }

  @Get('/lessons')
  getLessons() {
    return this.appService.getLessons();
  }

  @Post('/lessons/:id/evaluations')
  async createEvaluation(@Param() params: any, @Req() reques: Request) {

    return await this.appService.createEvaluationForLessonById(params.id, reques.body);
  }

}
