import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit, Trash2, ArrowLeft, Plus, Check, Info, X } from 'lucide-react';
import { AddTaskModal } from '../Modals/AddTaskModal/AddTaskModal';
import { UpdateTaskModal } from '../Modals/UpdateTaskModal/UpdateTaskModal';
import { 
  MotionViewContainer, 
  HeaderContainer, 
  HeaderActions,
  HeaderActionBtn,
  BackBtn,
  Title, 
  ListContainer, 
  ListItem, 
  ItemMainRow,
  ItemLeftContent,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  EditTitleInput,
  ItemTitle,
  ItemActions,
  ActionIconBtn,
  AnimatedSection,
  TextAreaInput,
  DescriptionBox,
  FooterContainer, 
  CompletedText,
  ProgressWrapper,
  ProgressBar, 
  ProgressFill, 
  ProgressPercent,
  AddButtonContainer,
  AddButton 
} from './TaskCardView.styles';

interface SubTask { id: string; title: string; description?: string; completed: boolean; }
interface Task { category: string; title: string; progress: number; subtasks?: SubTask[]; }

interface TaskCardViewProps {
  task: Task;
  onClose: () => void;
  onAddTasks?: (newTasks: SubTask[]) => void;
  onUpdateTasks?: (updatedTasks: SubTask[]) => void;
  onUpdateSingleTask?: (updatedTask: SubTask) => void;
  onToggleSubtask?: (subtaskId: string) => void;
}

export const TaskCardView: React.FC<TaskCardViewProps> = ({ 
  task, 
  onClose, 
  onAddTasks, 
  onUpdateTasks,
  onUpdateSingleTask, 
  onToggleSubtask 
}) => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isUpdateTaskModalOpen, setIsUpdateTaskModalOpen] = useState(false);
  
  const [editingSubtaskId, setEditingSubtaskId] = useState<string | null>(null);
  const [expandedSubtaskIds, setExpandedSubtaskIds] = useState<Record<string, boolean>>({});
  
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleAddTasksSubmit = (newTasks: SubTask[]) => {
    onAddTasks?.(newTasks);
  };

  const handleUpdateTasksSubmit = (updatedTasks: SubTask[]) => {
    onUpdateTasks?.(updatedTasks);
  };

  const handleStartEdit = (sub: SubTask) => {
    setEditingSubtaskId(sub.id);
    setEditTitle(sub.title);
    setEditDescription(sub.description || '');
  };

  const handleToggleExpand = (subId: string) => {
    if (editingSubtaskId === subId) return;
    setExpandedSubtaskIds(prev => ({
      ...prev,
      [subId]: !prev[subId]
    }));
  };

  const handleSaveEdit = (sub: SubTask) => {
    if (onUpdateSingleTask) {
      onUpdateSingleTask({
        ...sub,
        title: editTitle,
        description: editDescription,
      });
    }
    setEditingSubtaskId(null);
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
          <HeaderActions>
            <HeaderActionBtn onClick={() => setIsUpdateTaskModalOpen(true)}>
              <Edit size={20} />
            </HeaderActionBtn>
            <HeaderActionBtn $isDelete>
              <Trash2 size={20} />
            </HeaderActionBtn>
          </HeaderActions>
          <BackBtn onClick={onClose}>
            <ArrowLeft size={24} />
          </BackBtn>
        </HeaderContainer>

        <Title>{task.title}</Title>

        <ListContainer>
          {subtasksList.map((sub) => {
            const isEditing = editingSubtaskId === sub.id;
            const isExpanded = expandedSubtaskIds[sub.id];

            return (
              <ListItem 
                key={sub.id} 
                $isExpandedOrEditing={isEditing || isExpanded}
              >
                <ItemMainRow>
                  <ItemLeftContent>
                    <CheckboxWrapper>
                      <HiddenCheckbox 
                        checked={sub.completed} 
                        onChange={() => onToggleSubtask?.(sub.id)} 
                      />
                      <StyledCheckbox $checked={sub.completed} />
                    </CheckboxWrapper>
                    {isEditing ? (
                      <EditTitleInput
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                    ) : (
                      <ItemTitle>{sub.title}</ItemTitle>
                    )}
                  </ItemLeftContent>

                  <ItemActions>
                    {isEditing ? (
                      <>
                        <ActionIconBtn onClick={() => handleSaveEdit(sub)}>
                          <Check size={18} />
                        </ActionIconBtn>
                        <ActionIconBtn onClick={() => setEditingSubtaskId(null)}>
                          <X size={18} />
                        </ActionIconBtn>
                      </>
                    ) : (
                      <>
                        <ActionIconBtn onClick={() => handleToggleExpand(sub.id)}>
                          <Info size={18} />
                        </ActionIconBtn>
                        <ActionIconBtn onClick={() => handleStartEdit(sub)}>
                          <Edit size={18} />
                        </ActionIconBtn>
                        <ActionIconBtn $isDelete>
                          <Trash2 size={18} />
                        </ActionIconBtn>
                      </>
                    )}
                  </ItemActions>
                </ItemMainRow>

                <AnimatePresence>
                  {isEditing && (
                    <AnimatedSection
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <TextAreaInput
                        placeholder="Editar descrição..."
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                      />
                    </AnimatedSection>
                  )}

                  {!isEditing && isExpanded && (
                    <AnimatedSection
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <DescriptionBox>
                        {sub.description || 'Sem descrição fornecida.'}
                      </DescriptionBox>
                    </AnimatedSection>
                  )}
                </AnimatePresence>
              </ListItem>
            );
          })}
        </ListContainer>

        <FooterContainer>
          <CompletedText>
            {completedCount}/{totalCount} tarefas concluídas
          </CompletedText>
          <ProgressWrapper>
            <ProgressBar><ProgressFill $width={task.progress} /></ProgressBar>
            <ProgressPercent>{task.progress}%</ProgressPercent>
          </ProgressWrapper>
          <AddButtonContainer>
            <AddButton onClick={() => setIsAddTaskModalOpen(true)}>
              <Plus size={16} /> Adicionar tarefa
            </AddButton>
          </AddButtonContainer>
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