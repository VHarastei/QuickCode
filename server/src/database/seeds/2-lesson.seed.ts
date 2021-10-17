import { Lesson } from '../../lesson/entities/lesson.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
// section: await connection
//   .getRepository(Section)
//   .createQueryBuilder('section')
//   .where('section.id = :id', { id: 'typescript' })
//   .getOne(),

export default class CreateLessons implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log('LESSON SEEDED');
    await connection
      .createQueryBuilder()
      .insert()
      .into(Lesson)
      .values([
        {
          id: 'class-expressions',
          name: 'Class Expressions',
          code: 'biba and boba with booba',
          difficulty: 'medium',
          lines: 24,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'typescript' },
        },
        {
          id: 'sum-two',
          name: 'Sum Two',
          code: 'biba and boba with booba',
          difficulty: 'easy',
          lines: 12,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
        {
          id: 'redux-reducer',
          name: 'Redux Reducer',
          code: 'biba and boba with booba',
          difficulty: 'hard',
          lines: 75,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'react-ts' },
        },
      ])
      .execute();
  }
}
