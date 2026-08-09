import React, { useState } from 'react';
import { Edit, Trash2, ArrowLeft, Plus } from 'lucide-react';
import { AddTaskModal } from '../Modals/AddTaskModal/AddTaskModal';
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
  onAddTasks?: (newTasks: SubTask[]) => void;
}

export const TaskCardView: React.FC<TaskCardViewProps> = ({ task, onClose, onAddTasks }) => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const handleAddTasksSubmit = (newTasks: SubTask[]) => {
    onAddTasks?.(newTasks);
  };

  return (
    <>
      <MotionViewContainer
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <HeaderContainer>
          <div style={{ display: 'flex', gap: '16px', cursor: 'pointer' }}>
            <span 
              style={{ display: 'inline-flex', alignItems: 'center', color: '#333', transition: 'color 0.2s ease, transform 0.2s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2E7D32';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#333';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Edit size={20} />
            </span>
            <span 
              style={{ display: 'inline-flex', alignItems: 'center', color: '#333', transition: 'color 0.2s ease, transform 0.2s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#D32F2F';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#333';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Trash2 size={20} />
            </span>
          </div>
          <span 
            style={{ display: 'inline-flex', alignItems: 'center', color: '#333', cursor: 'pointer', transition: 'color 0.2s ease, transform 0.2s ease' }}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#2E7D32';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ArrowLeft size={24} />
          </span>
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
                <span 
                  style={{ display: 'inline-flex', alignItems: 'center', color: '#666', transition: 'color 0.2s ease, transform 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2E7D32';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#666';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Edit size={16} />
                </span>
                <span 
                  style={{ display: 'inline-flex', alignItems: 'center', color: '#666', transition: 'color 0.2s ease, transform 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D32F2F';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#666';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Trash2 size={16} />
                </span>
              </div>
            </ListItem>
          ))}
        </ListContainer>

        <FooterContainer>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
            <ProgressBar><ProgressFill $width={task.progress} /></ProgressBar>
            <span style={{ fontSize: '14px', fontWeight: '600', marginTop: '20px' }}>{task.progress}%</span>
          </div>
          <AddButton onClick={() => setIsAddTaskModalOpen(true)}>
            <Plus size={16} /> Adicionar tarefa
          </AddButton>
        </FooterContainer>
      </MotionViewContainer>

      {isAddTaskModalOpen && (
        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={() => setIsAddTaskModalOpen(false)}
          onAddTask={handleAddTasksSubmit}
        />
      )}
    </>
  );
};