import { IsDateString, IsNumberString } from "class-validator";

export class EvaluationsDto {
  @IsNumberString()
  id: number;

  @IsNumberString()
  score: number

  @IsDateString()
  createdAt: Date

}