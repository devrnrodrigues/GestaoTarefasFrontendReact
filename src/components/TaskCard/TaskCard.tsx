import React from 'react';
import {
  CardContainer,
  CardInfoIcon,
  CardCategory,
  CardTitle,
  ProgressContainer,
  ProgressBar,
  ProgressText
} from './TaskCard.styles';

interface TaskCardProps {
  category: string;
  title: string;
  progress: number;
}

export const TaskCard: React.FC<TaskCardProps> = ({ category, title, progress }) => {
  return (
    <CardContainer>
      <CardInfoIcon viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </CardInfoIcon>
      <div>
        <CardCategory>{category}</CardCategory>
        <CardTitle>{title}</CardTitle>
      </div>
      <div>
        <ProgressContainer>
          <ProgressBar $progress={progress} />
        </ProgressContainer>
        <ProgressText>{progress}%</ProgressText>
      </div>
    </CardContainer>
  );
};