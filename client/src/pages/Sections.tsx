import cssIcon from 'assets/css.svg';
import jsIcon from 'assets/js.svg';
import reactIcon from 'assets/react.svg';
import tsIcon from 'assets/ts.svg';
import uploadIcon from 'assets/upload.svg';
import { SectionCard, SectionCardPreloader } from 'components/SectionCard';
import { useDelayedQuery } from 'hooks/useDelayedQuery';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSectionsQuery } from 'services/sectionApi';

export const Sections = () => {
  const sections = useDelayedQuery(null, useGetSectionsQuery);
  // const [delay, setDelay] = useState(false);
  // const { data: sections } = useGetSectionsQuery(null, { skip: delay });

  // useEffect(() => {
  //   if (!!!sections) {
  //     setDelay(true); // because when we set skip: true, RTKQ doesn`t use cache
  //   }
  //   const handler = setTimeout(() => {
  //     setDelay(false);
  //   }, 400);

  //   return () => clearTimeout(handler);
  // }, [sections]);

  return (
    <div className="my-4" data-testid="sections">
      <h1 className="text-center text-4xl font-bold text-indigo-600">
        Improve your Typing with Open Source Code
      </h1>
      <h2 className="my-3 text-center text-3xl font-semibold text-gray-500">
        Choose one section of frontend development
      </h2>
      <div className="my-8 w-full flex flex-wrap justify-center gap-y-4 gap-x-8">
        {sections
          ? sections.map((section) => (
              <SectionCard
                key={section._id}
                route={section.route}
                name={section.name}
                description={section.description}
                iconStyle={getIconStyle(section.name)}
              />
            ))
          : [...Array(4)].map((v, i) => <SectionCardPreloader key={i} />)}
        <div className="w-1/2 -mx-2 border-4 border-dashed border-gray-400 p-6 flex flex-col items-center justify-center">
          <Link to="/lessons">
            <div className="flex items-center pb-2">
              <div className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg">
                <img width={32} height={32} src={uploadIcon} alt="upload icon" />
              </div>
            </div>
          </Link>
          <h4 className="font-semibold text-3xl">Create custom section</h4>
          <div className="text-lg font-semibold text-gray-500">
            Here you can create custom lesson with your code
          </div>
        </div>
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
    case 'JavaScript':
      return {
        src: jsIcon,
        color: 'bg-yellow-400',
      };
    case 'TypeScript':
      return {
        src: tsIcon,
        color: 'bg-blue-600',
      };
    // case 'html':
    //   return {
    //     src: htmlIcon,
    //     color: 'bg-red-500',
    //   };
    case 'CSS':
      return {
        src: cssIcon,
        color: 'bg-green-500',
      };
    case 'React and Redux':
      return {
        src: reactIcon,
        color: 'bg-lightBlue',
      };
    // case 'react-ts':
    //   return {
    //     src: reactIcon,
    //     color: 'bg-lightBlue',
    //   };
    default:
      return {
        src: uploadIcon,
        color: 'bg-gray-400',
      };
  }
};
