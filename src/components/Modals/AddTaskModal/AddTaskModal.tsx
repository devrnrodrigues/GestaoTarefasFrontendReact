import React, { useState } from 'react';
import { X, Plus, Trash2, CheckSquare } from 'lucide-react';
import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    FormGroup,
    Label,
    Input,
    TaskRow,
    AddTaskButton,
    ModalFooter,
    SubmitButton,
    CancelButton
} from './AddTaskModal.styles';

interface TaskItem {
    id: string;
    title: string;
    completed: boolean;
}

interface Task {
    category: string;
    title: string;
    progress: number;
    description: string;
    subtasks?: TaskItem[];
}

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddTask: (newTasks: TaskItem[]) => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onAddTask }) => {
    const [newTasks, setNewTasks] = useState<string[]>(['']);

    const handleAddTaskInput = () => {
        setNewTasks([...newTasks, '']);
    };

    const handleTaskChange = (index: number, value: string) => {
        const updated = [...newTasks];
        updated[index] = value;
        setNewTasks(updated);
    };

    const handleRemoveTaskInput = (index: number) => {
        setNewTasks(newTasks.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formattedTasks: TaskItem[] = newTasks
            .filter((st) => st.trim() !== '')
            .map((st, idx) => ({
                id: String(Date.now() + idx),
                title: st.endsWith(';') ? st : `${st};`,
                completed: false,
            }));

        if (formattedTasks.length === 0) return;

        onAddTask(formattedTasks);
        setNewTasks(['']);
        onClose();
    };

    return (
        <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
        >
            <ModalContainer
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
            >
                <ModalHeader>
                    <div>
                        <ModalTitle>Adicionar Tarefas</ModalTitle>
                        <p>Preencha os dados abaixo para incluir novas tarefas.</p>
                    </div>
                    <CloseButton onClick={onClose} type="button">
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>

                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <FormGroup>
                            <Label>
                                <CheckSquare size={14} /> Tarefas
                            </Label>
                            <div className="tasks-container">
                                {newTasks.map((taskItem, index) => (
                                    <TaskRow key={index}>
                                        <Input 
                                            id={`task-input-${index}`}
                                            type="text" 
                                            placeholder="Adicione uma tarefa..." 
                                            value={taskItem} 
                                            onChange={(e) => handleTaskChange(index, e.target.value)} 
                                        />
                                        {newTasks.length > 1 && (
                                            <button 
                                                type="button" 
                                                title="Remover tarefa"
                                                onClick={() => handleRemoveTaskInput(index)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        )}
                                    </TaskRow>
                                ))}
                            </div>
                            <AddTaskButton type="button" onClick={handleAddTaskInput}>
                                <Plus size={15} /> Adicionar tarefa
                            </AddTaskButton>
                        </FormGroup>
                    </div>

                    <ModalFooter>
                        <CancelButton type="button" onClick={onClose}>
                            Cancelar
                        </CancelButton>
                        <SubmitButton type="submit">
                            Salvar Tarefas
                        </SubmitButton>
                    </ModalFooter>
                </form>
            </ModalContainer>
        </ModalOverlay>
    );
};