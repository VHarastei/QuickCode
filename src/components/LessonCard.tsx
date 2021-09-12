import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Badge } from './Badge';
import { Button } from './Button';
import { Paper } from './Paper';
import { PercentageBadge } from './PercentageBadge';

//Modal.defaultStyles.overlay.backgroundColor = 'red';
type PropsType = {
  name: string;
  id: string;
  source: string;
  sourceCode: string;
  difficulty: 'easy' | 'medium' | 'hard';
  accuracy: number;
  lines: number;
};

export const LessonCard: React.FC<PropsType> = ({
  name,
  id,
  source,
  sourceCode,
  difficulty,
  accuracy,
  lines,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Paper>
      <div className="flex items-center justify-between pb-1">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <DetailsBtn source={source} sourceCode={sourceCode} />
      </div>
      <div className="flex justify-between pb-1.5">
        <h5 className="text-1xl font-semibold text-gray-500">Accuracy</h5>
        <PercentageBadge value={accuracy} />
      </div>
      <div className="flex justify-between pb-1.5">
        <h5 className="text-1xl font-semibold text-gray-500">Difficulty</h5>
        <Badge
          color={difficulty === 'easy' ? 'green' : difficulty === 'medium' ? 'yellow' : 'red'}
          value={difficulty[0].toUpperCase() + difficulty.slice(1)}
        />
      </div>
      <div className="flex justify-between pb-3">
        <h5 className="text-1xl font-semibold text-gray-500">Size</h5>
        <span className="text-base font-semibold">{`${lines} lines`}</span>
      </div>
      <div className="flex gap-4 w-full">
        <Link className="w-full" to={`/lessons/random`}>
          <Button fullWidth>Start</Button>
        </Link>
        <div className="w-full group">
          <Button fullWidth variant="secondary" onClick={() => setIsOpenModal(true)}>
            Overview
          </Button>
          <Modal
            isOpen={isOpenModal}
            onRequestClose={() => setIsOpenModal(false)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={() => setIsOpenModal(false)}>close</button>
            <div>I am a modal</div>
          </Modal>
        </div>
      </div>
    </Paper>
  );
};

const customStyles = {
  overlay: {
    //zIndex: 101,
    backgroundColor: '#00000055',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
};

type DetailsBtnPropsType = {
  source: string;
  sourceCode: string;
};

const DetailsBtn: React.FC<DetailsBtnPropsType> = ({ source, sourceCode }) => {
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
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
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
