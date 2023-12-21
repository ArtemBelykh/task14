import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class LessonDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsString()
  code: string;
}