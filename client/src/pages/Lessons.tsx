import { LessonCard } from 'components/LessonCard';
import React from 'react';
import { useParams } from 'react-router';
import { useGetSectionByIdQuery } from 'services/sectionApi';

export const Lessons = () => {
  const params: { sectionId: string } = useParams();
  const { data: section } = useGetSectionByIdQuery(params.sectionId);

  console.log(section);
  if (!section) return <div>loading</div>;

  return (
    <div className="my-4" data-testid="lessons">
      <h1 className="text-center text-4xl font-bold text-indigo-600">{`${section.name} lessons`}</h1>
      <h2 className="my-3 text-center text-3xl font-semibold text-gray-500">
        Choose and start your lesson
      </h2>
      <div className="my-8 w-full flex flex-wrap justify-center gap-y-4 gap-x-12 px-4">
        {section.lessons.map((lesson) => (
          <LessonCard {...lesson} key={lesson.id} sectionId={params.sectionId} />
        ))}
      </div>
    </div>
  );
};

//id={lesson.id}
// name={lesson.name}
// source={lesson.source}
// sourceCode={lesson.sourceCode}
// code={lesson.code}
// avgAccuracy={lesson.avgAccuracy}
// difficulty={lesson.difficulty}
// lines={lesson.lines}
