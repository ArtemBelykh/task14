import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Users } from './entities/users.entity'
import { Repository } from 'typeorm'
import { UsersDto } from './dto/users.dto'
import { LessonDto } from './dto/lesson.dto'
import { Lessons } from './entities/lessons.entity'
import { Evaluations } from './entities/evaluations.entity'

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(Lessons)
    private readonly lessonsRepository: Repository<Lessons>,
    @InjectRepository(Evaluations)
    private readonly evaluationsRepository: Repository<Evaluations>
  ) {
  }

  getUser(): Promise<Users[]> {
    return this.userRepository.find()
  }

  async createUsers(data: UsersDto): Promise<Users> {
    const createUser = this.userRepository.create({ ...data })
    const user = this.userRepository.save(createUser)

    return user
  }

  createLessons(data: LessonDto): Promise<Lessons> {
    const createLessons = this.lessonsRepository.create({ ...data })
    const leessons = this.lessonsRepository.save(createLessons)

    return leessons;
  }

  async getLessons() {
    const lessons = await this.lessonsRepository.find({
      relations: ['evaluations', 'evaluations.user']
    })

    return lessons.map((lesson) => ({
      id: lesson.id.toString(),
      name: lesson.name,
      code: lesson.code,
      evaluations: lesson.evaluations.map((evaluation) => ({
        id: evaluation.id.toString(),
        score: evaluation.score.toString(),
        user: {
          id: evaluation.user.id.toString(),
          name: evaluation.user.name
        }
      }))
    }))
  }

  async createEvaluationForLessonById(
    lessonId: any,
    evaluationData: any,
  ): Promise<Evaluations> {
    const { user_id, score } = evaluationData;

    const lesson = await this.lessonsRepository.findOne({ where: { id: lessonId } });


    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    let user = await this.userRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const evaluation = new Evaluations();
    evaluation.score = parseInt(score);
    evaluation.lesson = lesson;
    evaluation.user = user;


    return this.evaluationsRepository.save(evaluation);
  }
}
