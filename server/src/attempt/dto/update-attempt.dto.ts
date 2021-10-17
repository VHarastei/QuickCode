import { PartialType } from '@nestjs/mapped-types';
import { CreateAttemptDto } from './create-attempt.dto';

export class UpdateAttemptDto extends PartialType(CreateAttemptDto) {}
