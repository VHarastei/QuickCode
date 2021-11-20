import { LessonCard, LessonCardPreloader } from 'components/LessonCard';
import { useDelayedQuery } from 'hooks/useDelayedQuery';
import React from 'react';
import { useParams } from 'react-router';
import { useGetSectionByIdQuery } from 'services/sectionApi';
import emptyImg from 'assets/empty.png';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';

export const Lessons = () => {
  const params: { sectionId: string } = useParams();
  const section = useDelayedQuery(params.sectionId, useGetSectionByIdQuery);

  return (
    <div className="my-4" data-testid="lessons">
      <h1
        className={`text-center text-4xl font-bold text-indigo-600 ${
          section ? 'visible' : 'invisible'
        }`}
      >{`${section ? section.name : 'Section'} lessons`}</h1>
      <h2 className="my-3 text-center text-3xl font-semibold text-gray-500">
        Choose and start your lesson
      </h2>
      <div className="my-8 w-full flex flex-wrap justify-center gap-y-4 gap-x-12 px-4">
        {section ? (
          section.lessons.length ? (
            section.lessons.map((lesson, i) => (
              <LessonCard {...lesson} key={lesson._id} sectionId={params.sectionId} />
            ))
          ) : (
            <div className="flex flex-col items-center">
              <img width={256} height={256} src={emptyImg} alt="empty icon" />
              <h2 className="my-2 text-2xl font-semibold text-gray-500">Oops! No lessons</h2>
              <Link to="/">
                <Button>Go to homepage</Button>
              </Link>
            </div>
          )
        ) : (
          [...Array(6)].map((v, i) => <LessonCardPreloader key={i} />)
        )}
      </div>
    </div>
  );
};
