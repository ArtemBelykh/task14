import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Lessons } from "./lessons.entity";
import { Users } from "./users.entity";

@Entity()
export class Evaluations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Lessons, (lesson) => lesson.evaluations)
  lesson: Lessons;

  @ManyToOne(() => Users, (user) => user.evaluations)
  user: Users;
}