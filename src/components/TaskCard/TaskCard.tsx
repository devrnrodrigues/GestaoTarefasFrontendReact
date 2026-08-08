import React, { useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <CardContainer
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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