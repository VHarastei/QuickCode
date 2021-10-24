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
          code: 'class Greeter {\n\tpublic greet() {}\n}',
          difficulty: 'medium',
          lines: 24,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
        {
          id: 'sum-two',
          name: 'Sum Two',
          code: 'class Greeter {\n\tpublic greet() {}\n}',
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
          code: 'class Greeter {\n\tpublic greet() {}\n}',
          difficulty: 'hard',
          lines: 75,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
        {
          id: 'add-digits',
          name: 'Add Digits',
          code: 'class Greeter {\n\tpublic greet() {}\n}',
          difficulty: 'easy',
          lines: 11,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
        {
          id: 'integer-to-roman',
          name: 'Integer To Roman',
          code: 'class Greeter {\n\tpublic greet() {}\n}',
          difficulty: 'hard',
          lines: 54,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
        {
          id: 'power-of-two',
          name: 'Power of two',
          code: 'class Greeter {\n\tpublic greet() {}\n}',
          difficulty: 'medium',
          lines: 27,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
        {
          id: 'phone-number',
          name: 'Phone Number',
          code: 'class Greeter {\n\tpublic greet() {}\n}',
          difficulty: 'hard',
          lines: 142,
          source: 'https://www.typescriptlang.org/',
          sourceCode:
            'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
          section: { id: 'javascript' },
        },
      ])
      .execute();
  }
}
