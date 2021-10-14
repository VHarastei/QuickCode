import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Paper } from './Paper';

type PropsType = {
  icon: string;
  color: string;
  name: string;
  route: string;
  decription: string;
  numberOfLessons: number;
};

export const SectionCard: React.FC<PropsType> = ({
  icon,
  color,
  name,
  decription,
  route,
  numberOfLessons,
}) => {
  return (
    <Paper>
      <div className="flex items-center pb-2">
        <div className={`${color} p-3 rounded-lg`}>
          <img width={32} height={32} src={icon} alt="lang icon" />
        </div>
        <h3 className="ml-4 text-4xl font-semibold">{name}</h3>
      </div>
      <p className="text-lg my-1 text-gray-500">{decription}</p>
      <div className="flex gap-4 mt-3 w-full">
        <Link className="flex-shrink-0" to={`/lessons/${route}/random`}>
          <Button>Pick Random lesson</Button>
        </Link>
        <Link className="w-full" to={`/lessons/${route}`}>
          <Button variant="secondary" fullWidth>
            {`Explore ${numberOfLessons} lessons`}
          </Button>
        </Link>
      </div>
    </Paper>
  );
};
