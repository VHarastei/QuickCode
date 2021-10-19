import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Attempt } from '../../attempt/entities/attempt.entity';

export default class CreateAttempts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Attempt)
      .values([
        {
          accuracy: 86.34,
          errors: 22,
          time: 333,
          wpm: 55,
          lesson: { id: 'redux-reducer' },
          user: { id: 1 },
        },
      ])
      .execute();
  }
}
