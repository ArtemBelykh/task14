import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Evaluations } from "./evaluations.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Evaluations, (evaluation) => evaluation.user)
  evaluations: Evaluations[];
}