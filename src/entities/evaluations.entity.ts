import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lessons } from "./lessons.entity";
import { Users } from "./users.entity";

@Entity()
export class Evaluations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Lessons, (lessons) => lessons.evaluations, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'evaluations'})
  lessons: Lessons

  @OneToMany(() => Users, (users) => users.id)
  users: Users[]
}