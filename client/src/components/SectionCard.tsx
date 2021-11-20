import { IconStyleType } from 'pages/Sections';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetRandomLessonIdQuery } from 'services/lessonApi';
import { Button } from './Button';

type PropsType = {
  _id: string;
  name: string;
  route: string;
  description: string;
  iconStyle: IconStyleType;
};

export const SectionCard: React.FC<PropsType> = ({ _id, name, route, description, iconStyle }) => {
  const { data: random } = useGetRandomLessonIdQuery(_id);

  return (
    <div className="p-4 rounded-md shadow-sm bg-white w-1/2 -mx-2">
      <div className="flex items-center pb-2">
        <div className={`${iconStyle.color} p-3 rounded-lg`}>
          <img width={32} height={32} src={iconStyle.src} alt="lang icon" />
        </div>
        <h3 className="ml-4 text-4xl font-semibold">{name}</h3>
      </div>
      <p className="text-lg my-1 text-gray-500">{description}</p>
      <div className="flex gap-4 mt-3 w-full">
        <Link
          className="flex-shrink-0"
          to={`/lessons/${route}${random?.lessonId ? `/${random?.lessonId}` : ''}`}
        >
          <Button disabled={!random}>Pick Random lesson</Button>
        </Link>
        <Link className="w-full" to={`/lessons/${route}`}>
          <Button variant="secondary" fullWidth>
            Explore lessons
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const SectionCardPreloader = () => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-white w-1/2 -mx-2">
      <div className="flex items-center pb-2">
        <div className={`bg-gray-300 animate-pulse p-3 rounded-lg`}>
          <div className="w-8 h-8"></div>
        </div>
        <div className="bg-gray-300 animate-pulse ml-4 text-4xl text-transparent font-semibold w-1/2 rounded-lg">
          JavaScript
        </div>
      </div>
      <p className="bg-gray-300 animate-pulse text-lg my-1 text-transparent rounded-lg">
        Improve your speed in writing functions, algorithms, generics, types and interfaces, using
        examples from the documentation
      </p>
      <div className="h-11 bg-gray-300 animate-pulse flex gap-4 mt-3 w-full rounded-lg"></div>
    </div>
  );
};
