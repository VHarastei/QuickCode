import React from 'react';
import jsIcon from 'assets/js.svg';
import tsIcon from 'assets/ts.svg';
import htmlIcon from 'assets/html.svg';
import cssIcon from 'assets/css.svg';
import reactIcon from 'assets/react.svg';
import uploadIcon from 'assets/upload.svg';
import { SectionCard } from 'components/SectionCard';
import { Link } from 'react-router-dom';

export const Sections = () => {
  return (
    <div className="my-4">
      <h1 className="text-center text-4xl font-bold text-indigo-600">
        Improve your Typing with Open Source Code
      </h1>
      <h2 className="my-3 text-center text-3xl font-semibold text-gray-500">
        Choose one section of frontend development
      </h2>
      <div className="my-8">
        <div className="flex gap-4 mb-4">
          <SectionCard
            icon={jsIcon}
            color="bg-yellow-400"
            name="JavaScript"
            route="javascript"
            decription="Speed up the writing of JS algorithms, loops, conditional expressions, functions, classes, etc."
            numberOfLessons={42}
          />
          <SectionCard
            icon={tsIcon}
            color="bg-blue-600"
            name="TypeScript"
            route="typescript"
            decription="Improve your speed in writing functions, algorithms, generics, types and interfaces,
              using examples from the documentation"
            numberOfLessons={25}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <SectionCard
            icon={htmlIcon}
            color="bg-red-500"
            name="HTML"
            route="html"
            decription="Learn how to describe the layout of websites faster using the latest version of HTML"
            numberOfLessons={12}
          />
          <SectionCard
            icon={cssIcon}
            color="bg-green-500"
            name="CSS"
            route="css"
            decription="Learn to write beautiful and adaptive CSS styles faster and more accurately than ever before"
            numberOfLessons={20}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <SectionCard
            icon={reactIcon}
            color="bg-lightBlue"
            name="React JS"
            route="reactjs"
            decription="Learn to write faster JS code for React components, JSX, hooks and the latest React features"
            numberOfLessons={66}
          />
          <SectionCard
            icon={reactIcon}
            color="bg-lightBlue"
            name="React TS"
            route="reactts"
            decription="Improve the speed of writing typed React components using generics, PropsType, etc."
            numberOfLessons={11}
          />
        </div>
        <div className="m-auto w-1/2 border-4 border-dashed border-gray-400 p-6 flex flex-col items-center justify-center">
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
      </div>
    </div>
  );
};
