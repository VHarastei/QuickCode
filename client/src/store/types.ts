export interface ISection {
  id: string;
  name: string;
  description: string;
}

export interface ISectionWithLesson extends ISection {
  lessons: ILesson[];
}

export interface ILesson {
  id: string;
  name: string;
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lines: number;
  source: string;
  sourceCode: string;
  avgAccuracy: number;
}

export interface IAttempt {
  id: string;
  accuracy: number;
  wpm: number;
  time: number;
  errors: number;
}

export interface ICreateAttempt extends Omit<IAttempt, 'id'> {
  lessonId: string;
}
