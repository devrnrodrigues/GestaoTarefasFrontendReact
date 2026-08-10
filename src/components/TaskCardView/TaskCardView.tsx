import React, { useState } from 'react';
import { Edit, Trash2, ArrowLeft, Plus } from 'lucide-react';
import { AddTaskModal } from '../Modals/AddTaskModal/AddTaskModal';
import { UpdateTaskModal } from '../Modals/UpdateTaskModal/UpdateTaskModal';
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

interface SubTask { id: string; title: string; description?: string; completed: boolean; }
interface Task { category: string; title: string; progress: number; subtasks?: SubTask[]; }

interface TaskCardViewProps {
  task: Task;
  onClose: () => void;
  onAddTasks?: (newTasks: SubTask[]) => void;
  onUpdateTasks?: (updatedTasks: SubTask[]) => void;
  onToggleSubtask?: (subtaskId: string) => void;
}

export const TaskCardView: React.FC<TaskCardViewProps> = ({ 
  task, 
  onClose, 
  onAddTasks, 
  onUpdateTasks, 
  onToggleSubtask 
}) => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isUpdateTaskModalOpen, setIsUpdateTaskModalOpen] = useState(false);

  const handleAddTasksSubmit = (newTasks: SubTask[]) => {
    onAddTasks?.(newTasks);
  };

  const handleUpdateTasksSubmit = (updatedTasks: SubTask[]) => {
    onUpdateTasks?.(updatedTasks);
  };

  const subtasksList = task.subtasks || [];
  const completedCount = subtasksList.filter(st => st.completed).length;
  const totalCount = subtasksList.length;

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
              onClick={() => setIsUpdateTaskModalOpen(true)}
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
          {subtasksList.map((sub) => (
            <ListItem key={sub.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input 
                  type="checkbox" 
                  checked={sub.completed} 
                  onChange={() => onToggleSubtask?.(sub.id)} 
                  style={{ cursor: 'pointer' }} 
                />
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
          <div style={{ fontSize: '12px', color: '#666', fontWeight: '500', marginBottom: '6px', textAlign: 'left' }}>
            {completedCount}/{totalCount} tarefas concluídas
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <ProgressBar><ProgressFill $width={task.progress} /></ProgressBar>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>{task.progress}%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <AddButton onClick={() => setIsAddTaskModalOpen(true)}>
              <Plus size={16} /> Adicionar tarefa
            </AddButton>
          </div>
        </FooterContainer>
      </MotionViewContainer>

      {isAddTaskModalOpen && (
        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={() => setIsAddTaskModalOpen(false)}
          onAddTask={handleAddTasksSubmit}
        />
      )}

      {isUpdateTaskModalOpen && (
        <UpdateTaskModal
          open={isUpdateTaskModalOpen}
          onClose={() => setIsUpdateTaskModalOpen(false)}
          onUpdateTask={handleUpdateTasksSubmit}
          initialTasks={subtasksList}
        />
      )}
    </>
  );
};