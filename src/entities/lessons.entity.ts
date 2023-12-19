import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evaluations } from "./evaluations.entity";

@Entity()
export class Lessons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => Evaluations, (evaluations) => evaluations.id)
  evaluations: Evaluations[]
}