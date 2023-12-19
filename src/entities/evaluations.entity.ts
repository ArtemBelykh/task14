import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @ManyToOne(() => Lessons, (lessons) => lessons.evaluations, {onDelete: 'CASCADE'})
  lessons: Lessons

  @OneToMany(() => Users, (users) => users.id)
  user: Users[]
}