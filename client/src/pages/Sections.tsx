import cssIcon from 'assets/css.svg';
import htmlIcon from 'assets/html.svg';
import jsIcon from 'assets/js.svg';
import reactIcon from 'assets/react.svg';
import tsIcon from 'assets/ts.svg';
import uploadIcon from 'assets/upload.svg';
import { SectionCard } from 'components/SectionCard';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSectionsQuery } from 'services/sectionsApi';
import { SectionType } from 'store/types';

export const Sections = () => {
  const { data: sections } = useGetSectionsQuery();

  if (!sections) return <div>isLoading</div>;

  const dividedItems: SectionType[][] = [];
  let pair: SectionType[] = [];

  sections.forEach((item, index) => {
    pair.push(item);
    if ((index + 1) % 2 === 0) {
      dividedItems.push(pair);
      pair = [];
    }
  });

  if (pair.length <= 1) pair.push({ id: 'createCustom', name: '', description: '' });
  if (pair.length) dividedItems.push(pair);

  return (
    <div className="my-4" data-testid="sections">
      <h1 className="text-center text-4xl font-bold text-indigo-600">
        Improve your Typing with Open Source Code
      </h1>
      <h2 className="my-3 text-center text-3xl font-semibold text-gray-500">
        Choose one section of frontend development
      </h2>
      <div className="my-8">
        {dividedItems.map((pair, index: number) => {
          return (
            <div key={index} className="flex gap-4 mb-4">
              {pair.map((section) =>
                section.id === 'createCustom' ? (
                  <div
                    key={section.id}
                    className="m-auto w-1/2 border-4 border-dashed border-gray-400 p-6 flex flex-col items-center justify-center"
                  >
                    <Link to="/lessons">
                      <div className="flex items-center pb-2">
                        <div className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg">
                          <img width={32} height={32} src={uploadIcon} alt="lang icon" />
                        </div>
                      </div>
                    </Link>
                    <h4 className="font-semibold text-3xl">Create custom section</h4>
                    <div className="text-lg font-semibold text-gray-500">
                      Here you can create custom lesson with your code
                    </div>
                  </div>
                ) : (
                  <SectionCard
                    key={section.id}
                    id={section.id}
                    name={section.name}
                    description={section.description}
                    iconStyle={getIconStyle(section.id)}
                  />
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export type IconStyleType = {
  src: string;
  color: string;
};

const getIconStyle = (id: string): IconStyleType => {
  switch (id) {
    case 'javascript':
      return {
        src: jsIcon,
        color: 'bg-yellow-400',
      };
    case 'typescript':
      return {
        src: tsIcon,
        color: 'bg-blue-600',
      };
    case 'html':
      return {
        src: htmlIcon,
        color: 'bg-red-500',
      };
    case 'css':
      return {
        src: cssIcon,
        color: 'bg-green-500',
      };
    case 'react-js':
      return {
        src: reactIcon,
        color: 'bg-lightBlue',
      };
    case 'react-ts':
      return {
        src: reactIcon,
        color: 'bg-lightBlue',
      };

    default:
      return {
        src: uploadIcon,
        color: 'bg-gray-400',
      };
  }
};
