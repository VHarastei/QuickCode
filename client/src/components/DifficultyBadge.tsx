import React from 'react';
import { Badge } from './Badge';

type PropsType = {
  difficulty: string;
  size?: 'normal' | 'large';
};

export const DifficultyBadge: React.FC<PropsType> = ({ difficulty, size }) => {
  return (
    <Badge
      color={difficulty === 'easy' ? 'green' : difficulty === 'medium' ? 'yellow' : 'red'}
      value={difficulty[0].toUpperCase() + difficulty.slice(1)}
      size={size}
    />
  );
};
