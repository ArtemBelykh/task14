import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UsersDto } from "./dto/users.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users) private UserRepository: Repository<Users>,
  ) {}

  getUser() {}

  createUsers(data: UsersDto) {
    return this.UserRepository.create(data)
  }

  createLessons() {}

  getActivityByEvaluationsUser() {}

  getLessons() {}

  createActivityByEvaluationsLesson() {}
}
