export class CreateLessonDto {
  name: string;
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lines: number;
  source: string;
  sourceCode: string;
}
