import { Section } from './../section/entities/section.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class CreateSections implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Section)
      .values([
        {
          id: 'javascript',
          name: 'JavaScript',
          description:
            'Speed up the writing of JS algorithms, loops, conditional expressions, functions, classes, etc.',
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          description:
            'Improve your speed in writing functions, algorithms, generics, types and interfaces, using examples from the documentation',
        },
        {
          id: 'html',
          name: 'HTML',
          description:
            'Learn how to describe the layout of websites faster using the latest version of HTML',
        },
        {
          id: 'css',
          name: 'CSS',
          description:
            'Learn to write beautiful and adaptive CSS styles faster and more accurately than ever before',
        },
        {
          id: 'reactjs',
          name: 'React JS',
          description:
            'Learn to write faster JS code for React components, JSX, hooks and the latest React features',
        },
        {
          id: 'reactts',
          name: 'React TS',
          description:
            'Improve the speed of writing typed React components using generics, PropsType, etc.',
        },
      ])
      .execute();
  }
}
