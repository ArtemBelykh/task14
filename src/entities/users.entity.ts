import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Evaluations } from "./evaluations.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Evaluations, (evaluations) => evaluations.users, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'user'})
  evaluations: Evaluations
}
