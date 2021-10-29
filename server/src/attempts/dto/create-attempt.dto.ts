export class CreateAttemptDto {
  accuracy: number;
  wpm: number;
  time: number;
  numberOfErrors: number; // because 'errors' reserved by Mongoose
  lesson: string;
  user: string;
}
