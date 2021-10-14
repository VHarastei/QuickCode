import React from 'react';
import { Badge } from './Badge';

type PropsType = {
  value: number;
};

export const PercentageBadge: React.FC<PropsType> = ({ value }) => {
  let color = value === 0 ? 'gray' : value < 40 ? 'red' : value < 80 ? 'yellow' : 'green';
  return <Badge color={color} value={`${value}%`} />;
};
