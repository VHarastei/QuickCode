export interface ISection {
  _id: string;
  name: string;
  route: string;
  description: string;
}

export interface ISectionWithLesson extends ISection {
  lessons: ILesson[];
}

export interface ILesson {
  _id: string;
  name: string;
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lines: number;
  source: string;
  sourceCode: string;
  avgAccuracy: number;
}

export interface IAttempt {
  _id: string;
  accuracy: number;
  wpm: number;
  time: number;
  numberOfErrors: number;
}

export interface ICreateAttempt extends Omit<IAttempt, '_id'> {
  lesson: string;
}

export interface IProfile {
  totalTime: string;
  totalLessons: number;
  topSpeed: number;
  averageSpeed: number;
  typingChart: { lessonNumber: number; wpm: number }[];
}

export interface IUser {
  googleId: string;
  email: string;
  name: string;
  imageUrl: string;
}
