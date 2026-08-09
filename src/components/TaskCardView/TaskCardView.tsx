import React from 'react';
import { 
  MotionViewContainer, 
  HeaderContainer, 
  Title, 
  ListContainer, 
  ListItem, 
  FooterContainer, 
  ProgressBar, 
  ProgressFill, 
  AddButton 
} from './TaskCardView.styles';

interface SubTask { id: string; title: string; completed: boolean; }
interface Task { category: string; title: string; progress: number; subtasks?: SubTask[]; }

interface TaskCardViewProps {
  task: Task;
  onClose: () => void;
}

export const TaskCardView: React.FC<TaskCardViewProps> = ({ task, onClose }) => {
  return (
    <MotionViewContainer
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <HeaderContainer>
        <div style={{ display: 'flex', gap: '16px', cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </div>
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={onClose}>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </HeaderContainer>

      <Title>{task.title}</Title>

      <ListContainer>
        {task.subtasks?.map((sub) => (
          <ListItem key={sub.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input type="checkbox" checked={sub.completed} style={{ cursor: 'pointer' }} />
              <span>{sub.title}</span>
            </div>
            <div style={{ display: 'flex', gap: '15px', color: '#666', cursor: 'pointer' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </div>
          </ListItem>
        ))}
      </ListContainer>

      <FooterContainer>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
          <ProgressBar><ProgressFill $width={task.progress} /></ProgressBar>
          <span style={{ fontSize: '14px', fontWeight: '600', marginTop: '20px' }}>{task.progress}%</span>
        </div>
        <AddButton>+ Adicionar tarefa</AddButton>
      </FooterContainer>
    </MotionViewContainer>
  );
};