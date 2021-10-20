import { IconStyleType } from 'pages/Sections';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

type PropsType = {
  id: string;
  name: string;
  description: string;
  iconStyle: IconStyleType;
};

export const SectionCard: React.FC<PropsType> = ({ id, name, description, iconStyle }) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-white m-auto w-1/2">
      <div className="flex items-center pb-2">
        <div className={`${iconStyle.color} p-3 rounded-lg`}>
          <img width={32} height={32} src={iconStyle.src} alt="lang icon" />
        </div>
        <h3 className="ml-4 text-4xl font-semibold">{name}</h3>
      </div>
      <p className="text-lg my-1 text-gray-500">{description}</p>
      <div className="flex gap-4 mt-3 w-full">
        <Link className="flex-shrink-0" to={`/lessons/${id}/random`}>
          <Button>Pick Random lesson</Button>
        </Link>
        <Link className="w-full" to={`/lessons/${id}`}>
          <Button variant="secondary" fullWidth>
            {`Explore lessons`}
          </Button>
        </Link>
      </div>
    </div>
  );
};
