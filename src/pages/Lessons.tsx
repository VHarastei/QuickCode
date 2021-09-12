import { LessonCard } from 'components/LessonCard';
import React from 'react';

export const Lessons = () => {
  return (
    <div className="my-4">
      <h1 className="text-center text-4xl font-bold text-indigo-600">TypeScript lessons</h1>
      <h2 className="my-3 text-center text-3xl font-semibold text-gray-500">
        Choose and start your lesson
      </h2>
      <div className="my-8">
        <div className="flex gap-4 mb-4">
          <LessonCard
            name="Two Sum"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="easy"
            accuracy={43.21}
            lines={351}
          />
          <LessonCard
            name="Member Visibility"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="medium"
            accuracy={13.56}
            lines={186}
          />
          <LessonCard
            name="Class Expressions"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="hard"
            accuracy={0}
            lines={124}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <LessonCard
            name="Two Sum"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="easy"
            accuracy={43.21}
            lines={351}
          />
          <LessonCard
            name="Member Visibility"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="medium"
            accuracy={13.56}
            lines={186}
          />
          <LessonCard
            name="Class Expressions"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="hard"
            accuracy={0}
            lines={124}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <LessonCard
            name="Two Sum"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="easy"
            accuracy={43.21}
            lines={351}
          />
          <LessonCard
            name="Member Visibility"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="medium"
            accuracy={13.56}
            lines={186}
          />
          <LessonCard
            name="Class Expressions"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="hard"
            accuracy={0}
            lines={124}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <LessonCard
            name="Two Sum"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="easy"
            accuracy={43.21}
            lines={351}
          />
          <LessonCard
            name="Member Visibility"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="medium"
            accuracy={13.56}
            lines={186}
          />
          <LessonCard
            name="Class Expressions"
            id="1"
            source="https://www.typescriptlang.org/"
            sourceCode="https://www.typescriptlang.org/docs/handbook/2/classes.html#protected"
            difficulty="hard"
            accuracy={0}
            lines={124}
          />
        </div>
      </div>
    </div>
  );
};
