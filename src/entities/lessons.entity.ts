import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Evaluations } from './evaluations.entity';

@Entity()
export class Lessons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => Evaluations, (evaluation) => evaluation.lesson)
  evaluations: Evaluations[];
}
