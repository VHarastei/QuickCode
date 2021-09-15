import React from 'react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import restartIcon from 'assets/restart.svg';
import speedIcon from 'assets/speed.svg';
import { Paper } from '../components/Paper';

type PropsType = {
  name: string;
  id: string;
  section: string;
  source: string;
  sourceCode: string;
  difficulty: 'easy' | 'medium' | 'hard';
  accuracy: number;
  lines: number;
};

export const Lesson: React.FC = () => {
  const lesson: PropsType = {
    name: 'Class Expressions',
    id: '2',
    section: 'typescript',
    source: 'https://www.typescriptlang.org/',
    sourceCode: 'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
    difficulty: 'easy',
    accuracy: 0,
    lines: 256,
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold mr-4">{lesson.name}</h3>
          <Badge
            color={
              lesson.difficulty === 'easy'
                ? 'green'
                : lesson.difficulty === 'medium'
                ? 'yellow'
                : 'red'
            }
            value={lesson.difficulty[0].toUpperCase() + lesson.difficulty.slice(1)}
            size="large"
          />
        </div>
        <div className="flex items-center">
          <h4 className="text-2xl font-semibold mr-2 text-gray-500">Time:</h4>
          <h4 className="text-3xl font-semibold mr-4">01:25</h4>
          <Button>
            <img className="mr-1" src={restartIcon} width={24} height={24} alt="restart icon" />
            Restart
          </Button>
        </div>
      </div>
      <Paper className="mt-4">
        <div>
          <div className="flex items-center opacity-50">
            <img className="mr-1" src={speedIcon} width={36} height={36} alt="restart icon" />
            <span className="text-xl font-semibold">Speed</span>
          </div>
          <div className="text-indigo-600">
            <span className="text-3xl font-bold">25.7</span>
            <span className="text-xs font-semibold">WPM</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};
