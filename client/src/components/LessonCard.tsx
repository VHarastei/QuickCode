import closeIcon from 'assets/close.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ILesson } from 'store/types';
import { Button } from './Button';
import { CustomModal } from './CustomModal';
import { DifficultyBadge } from './DifficultyBadge';
import { PercentageBadge } from './PercentageBadge';

export const LessonCard: React.FC<ILesson & { sectionId: string }> = ({
  name,
  _id,
  code,
  source,
  sourceCode,
  difficulty,
  avgAccuracy,
  lines,
  sectionId,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="p-4 rounded-md shadow-sm bg-white w-1/3 -mx-4">
      <div className="flex items-center justify-between pb-1">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <DetailsBtn source={source} sourceCode={sourceCode} />
      </div>
      <div className="flex justify-between pb-1.5">
        <h5 className="text-1xl font-semibold text-gray-500">Accuracy</h5>
        <PercentageBadge value={avgAccuracy} />
      </div>
      <div className="flex justify-between pb-1.5">
        <h5 className="text-1xl font-semibold text-gray-500">Difficulty</h5>
        <DifficultyBadge difficulty={difficulty} />
      </div>
      <div className="flex justify-between pb-3">
        <h5 className="text-1xl font-semibold text-gray-500">Size</h5>
        <span className="text-base font-semibold">{`${lines} lines`}</span>
      </div>
      <div className="flex gap-4 w-full">
        <Link className="w-full" to={`/lessons/${sectionId}/${_id}`}>
          <Button fullWidth>Start</Button>
        </Link>
        <div className="w-full group">
          <Button fullWidth variant="secondary" onClick={() => setIsOpenModal(true)}>
            Overview
          </Button>
          <CustomModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
            <div className="flex justify-between">
              <h3 className="text-3xl font-semibold">{name}</h3>
              <button onClick={() => setIsOpenModal(false)}>
                <img
                  className="opacity-50 hover:opacity-100"
                  width={32}
                  height={32}
                  src={closeIcon}
                  alt="lang icon"
                />
              </button>
            </div>
            <pre className="my-4 max-h-96 overflow-y-scroll">{code}</pre>
            {/* <pre className="my-4 max-h-96 overflow-y-scroll">{`
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}

const g = new SpecialGreeter();
g.greet(); // OK
g.getName();`}</pre> */}
            <Link className="w-full" to={`/lessons/${sectionId}/${_id}`}>
              <Button fullWidth>Start</Button>
            </Link>
          </CustomModal>
        </div>
      </div>
    </div>
  );
};

const DetailsBtn: React.FC<Pick<ILesson, 'source' | 'sourceCode'>> = ({ source, sourceCode }) => {
  return (
    <div className="relative group inline-block text-left pb-1">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2.5 py-1.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Details
        <svg
          className="-mr-1 ml-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="transition-all overflow-hidden h-0 opacity-0 group-focus-within:h-auto group-focus-within:opacity-100 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <a
            href={source}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
          <a
            href={sourceCode}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
          <button
            disabled
            className="w-full text-left text-gray-600 block px-4 py-2 text-sm hover:bg-gray-50"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export const LessonCardPreloader = () => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-white w-1/3 -mx-4">
      <div className="flex items-center justify-between pb-1">
        <h3 className="bg-gray-300 animate-pulse text-transparent rounded-lg text-3xl font-semibold">
          Class Expressions
        </h3>
        <div className="bg-gray-300 animate-pulse text-transparent text-3xl rounded-lg">
          details
        </div>
      </div>
      <div className="flex justify-between pb-1.5">
        <h5 className="bg-gray-300 animate-pulse text-transparent rounded-lg text-1xl font-semibold">
          Accuracy
        </h5>
        <div className="bg-gray-300 animate-pulse text-transparent rounded-lg">badge</div>
      </div>
      <div className="flex justify-between pb-1.5">
        <h5 className="bg-gray-300 animate-pulse text-transparent rounded-lg text-1xl font-semibold">
          Difficulty
        </h5>
        <div className="bg-gray-300 animate-pulse text-transparent rounded-lg">badge</div>
      </div>
      <div className="flex justify-between pb-3">
        <h5 className="bg-gray-300 animate-pulse text-transparent rounded-lg text-1xl font-semibold">
          Size
        </h5>
        <span className="bg-gray-300 animate-pulse text-transparent rounded-lg text-base font-semibold">
          20 lines
        </span>
      </div>

      <div className="h-11 bg-gray-300 animate-pulse flex gap-4 w-full rounded-lg"></div>
    </div>
  );
};
