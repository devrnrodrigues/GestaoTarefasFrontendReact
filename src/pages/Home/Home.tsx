import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { TaskCardView } from '../../components/TaskCardView/TaskCardView';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { AddGoalModal } from '../../components/Modals/AddGoalModal/AddGoalModal';
import { UpdateGoalModal } from '../../components/Modals/UpdateGoalModal/UpdateGoalModal';
import { ConfirmDeleteModal } from '../../components/Modals/ConfirmDeleteModal/ConfirmDeleteModal';
import {
    MainContentWrapper,
    DashboardArea,
    DashboardHeader,
    DashboardTitle,
    ViewSelector,
    AddButton,
    CardGrid
} from './Home.styles';

interface SubTask {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
}

interface Task {
    category: string;
    title: string;
    progress: number;
    description: string;
    deadline?: string;
    subtasks?: SubTask[];
}

const initialTasks: Task[] = [
    { 
        category: 'Engenharia de Software', 
        title: 'Frontend', 
        progress: 49, 
        description: 'Conceitos avançados de Frontend',
        deadline: '15/12/2026',
        subtasks: [
            { id: '1', title: 'Gerenciamento de estado;', completed: true },
            { id: '2', title: 'Testes de Frontend;', completed: true },
            { id: '3', title: 'Performance Web;', completed: true },
            { id: '4', title: 'Segurança no Frontend (XSS, CSRF);', completed: true },
            { id: '5', title: 'SSR / SSG;', completed: false },
            { id: '6', title: 'Microfrontends;', completed: false },
            { id: '7', title: 'Interface de Usuário (UI);', completed: false },
            { id: '8', title: 'Experiência de Usuário (UX);', completed: false },
            { id: '9', title: 'Usabilidade;', completed: false },
            { id: '10', title: 'Responsividade;', completed: false },
        ]
    },
    { 
        category: 'Engenharia de Software', 
        title: 'Backend', 
        progress: 39, 
        description: 'APIs e arquitetura de servidores',
        deadline: '20/11/2026',
        subtasks: [
            { id: '1', title: 'Node.js;', completed: true },
            { id: '2', title: 'Express;', completed: true },
            { id: '3', title: 'JWT Auth;', completed: true },
            { id: '4', title: 'REST APIs;', completed: false },
            { id: '5', title: 'GraphQL;', completed: false },
            { id: '6', title: 'Microservices;', completed: false },
            { id: '7', title: 'Docker;', completed: false },
            { id: '8', title: 'Swagger;', completed: false },
            { id: '9', title: 'Redis;', completed: false },
            { id: '10', title: 'Testes unitários;', completed: false },
        ]
    },
    { 
        category: 'Engenharia de Software', 
        title: 'Banco de Dados', 
        progress: 19, 
        description: 'Modelagem e otimização',
        deadline: '10/10/2026',
        subtasks: [
            { id: '1', title: 'SQL básico;', completed: true },
            { id: '2', title: 'PostgreSQL;', completed: true },
            { id: '3', title: 'Indexes;', completed: false },
            { id: '4', title: 'Transações;', completed: false },
            { id: '5', title: 'NoSQL;', completed: false },
            { id: '6', title: 'MongoDB;', completed: false },
            { id: '7', title: 'Redis cache;', completed: false },
            { id: '8', title: 'Modelagem ER;', completed: false },
            { id: '9', title: 'Migrations;', completed: false },
            { id: '10', title: 'Backup e Restore;', completed: false },
        ]
    },
    { 
        category: 'Engenharia de Software', 
        title: 'Nuvem', 
        progress: 49, 
        description: 'Deploy e infraestrutura cloud',
        deadline: '05/01/2027',
        subtasks: [
            { id: '1', title: 'AWS básico;', completed: true },
            { id: '2', title: 'EC2;', completed: true },
            { id: '3', title: 'S3 buckets;', completed: true },
            { id: '4', title: 'IAM;', completed: true },
            { id: '5', title: 'Serverless;', completed: false },
            { id: '6', title: 'Lambda;', completed: false },
            { id: '7', title: 'CloudFront;', completed: false },
            { id: '8', title: 'Route 53;', completed: false },
            { id: '9', title: 'Docker Swarm;', completed: false },
            { id: '10', title: 'Kubernetes;', completed: false },
        ]
    },
    { 
        category: 'Engenharia de Software', 
        title: 'Versionamento', 
        progress: 57, 
        description: 'Git avançado',
        deadline: '30/09/2026',
        subtasks: [
            { id: '1', title: 'Git init;', completed: true },
            { id: '2', title: 'Branching;', completed: true },
            { id: '3', title: 'Rebase;', completed: true },
            { id: '4', title: 'Cherry-pick;', completed: true },
            { id: '5', title: 'Git flow;', completed: true },
            { id: '6', title: 'GitHub Actions;', completed: false },
            { id: '7', title: 'Pull Requests;', completed: false },
            { id: '8', title: 'Code Review;', completed: false },
            { id: '9', title: 'Submodules;', completed: false },
            { id: '10', title: 'Git hooks;', completed: false },
        ]
    },
    { 
        category: 'Engenharia de Software', 
        title: 'Testes', 
        progress: 27, 
        description: 'Testes unitários e e2e',
        deadline: '18/11/2026',
        subtasks: [
            { id: '1', title: 'Jest;', completed: true },
            { id: '2', title: 'Vitest;', completed: true },
            { id: '3', title: 'React Testing Library;', completed: false },
            { id: '4', title: 'Cypress;', completed: false },
            { id: '5', title: 'Playwright;', completed: false },
            { id: '6', title: 'TDD;', completed: false },
            { id: '7', title: 'Mocking;', completed: false },
            { id: '8', title: 'Coverage;', completed: false },
            { id: '9', title: 'E2E testing;', completed: false },
            { id: '10', title: 'Integration tests;', completed: false },
        ]
    },
];

export const Home: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [goalToEdit, setGoalToEdit] = useState<Task | null>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

    const cardsPerPage = 6;
    const totalPages = Math.ceil(tasks.length / cardsPerPage) || 1;

    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentTasks = tasks.slice(startIndex, startIndex + cardsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleCreateTask = (newTask: Task) => {
        setTasks([newTask, ...tasks]);
        setCurrentPage(1);
    };

    const handleOpenEditModal = (absoluteIndex: number) => {
        setEditingIndex(absoluteIndex);
        setGoalToEdit(tasks[absoluteIndex]);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateGoal = (updatedTask: Task) => {
        if (editingIndex !== null) {
            const updatedTasks = [...tasks];
            const oldTask = updatedTasks[editingIndex];

            const subtasks = updatedTask.subtasks || oldTask.subtasks || [];
            const total = subtasks.length;
            const completed = subtasks.filter((st) => st.completed).length;
            const progress = total > 0 ? Math.round((completed / total) * 100) : oldTask.progress;

            updatedTasks[editingIndex] = {
                ...updatedTask,
                subtasks,
                progress,
            };

            setTasks(updatedTasks);
        }
        setIsUpdateModalOpen(false);
        setGoalToEdit(null);
        setEditingIndex(null);
    };

    const handleOpenDeleteModal = (absoluteIndex: number) => {
        setDeletingIndex(absoluteIndex);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (deletingIndex !== null) {
            const updatedTasks = tasks.filter((_, idx) => idx !== deletingIndex);
            setTasks(updatedTasks);
            if (selectedTaskIndex === deletingIndex) {
                setSelectedTaskIndex(null);
            } else if (selectedTaskIndex !== null && selectedTaskIndex > deletingIndex) {
                setSelectedTaskIndex(selectedTaskIndex - 1);
            }
        }
        setIsDeleteModalOpen(false);
        setDeletingIndex(null);
    };

    const handleUpdateSingleTask = (updatedSubtask: SubTask) => {
        if (selectedTaskIndex !== null) {
            const updatedTasks = [...tasks];
            const currentTask = updatedTasks[selectedTaskIndex];
            const subtasksList = currentTask.subtasks || [];

            const newSubtasks = subtasksList.map((st) => 
                st.id === updatedSubtask.id ? updatedSubtask : st
            );

            const total = newSubtasks.length;
            const completed = newSubtasks.filter((st) => st.completed).length;
            const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;

            updatedTasks[selectedTaskIndex] = {
                ...currentTask,
                subtasks: newSubtasks,
                progress: newProgress,
            };

            setTasks(updatedTasks);
        }
    };

    const handleAddSubtasks = (newSubtasks: SubTask[]) => {
        if (selectedTaskIndex !== null) {
            const updatedTasks = [...tasks];
            const currentTask = updatedTasks[selectedTaskIndex];
            const existingSubtasks = currentTask.subtasks || [];
            
            const combinedSubtasks = [...existingSubtasks, ...newSubtasks];
            const total = combinedSubtasks.length;
            const completed = combinedSubtasks.filter((st) => st.completed).length;
            const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;

            updatedTasks[selectedTaskIndex] = {
                ...currentTask,
                subtasks: combinedSubtasks,
                progress: newProgress,
            };

            setTasks(updatedTasks);
        }
    };

    const handleToggleSubtask = (subtaskId: string) => {
        if (selectedTaskIndex !== null) {
            const updatedTasks = [...tasks];
            const currentTask = updatedTasks[selectedTaskIndex];
            const subtasksList = currentTask.subtasks || [];

            const updatedSubtasks = subtasksList.map((st) => 
                st.id === subtaskId ? { ...st, completed: !st.completed } : st
            );

            const total = updatedSubtasks.length;
            const completed = updatedSubtasks.filter((st) => st.completed).length;
            const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;

            updatedTasks[selectedTaskIndex] = {
                ...currentTask,
                subtasks: updatedSubtasks,
                progress: newProgress,
            };

            setTasks(updatedTasks);
        }
    };

    const handleDeleteSubtask = (subtaskId: string) => {
        if (selectedTaskIndex !== null) {
            const updatedTasks = [...tasks];
            const currentTask = updatedTasks[selectedTaskIndex];
            const subtasksList = currentTask.subtasks || [];

            const updatedSubtasks = subtasksList.filter((st) => st.id !== subtaskId);

            const total = updatedSubtasks.length;
            const completed = updatedSubtasks.filter((st) => st.completed).length;
            const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;

            updatedTasks[selectedTaskIndex] = {
                ...currentTask,
                subtasks: updatedSubtasks,
                progress: newProgress,
            };

            setTasks(updatedTasks);
        }
    };

    return (
        <>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <MainContentWrapper>
                <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                
                <AnimatePresence mode="wait">
                    {selectedTaskIndex !== null ? (
                        <TaskCardView 
                            key="task-view"
                            task={tasks[selectedTaskIndex]} 
                            onClose={() => setSelectedTaskIndex(null)} 
                            onAddTasks={handleAddSubtasks}
                            onUpdateSingleTask={handleUpdateSingleTask}
                            onToggleSubtask={handleToggleSubtask}
                            onDeleteTask={() => handleOpenDeleteModal(selectedTaskIndex)}
                            onDeleteSubtask={handleDeleteSubtask}
                        />
                    ) : (
                        <DashboardArea key="dashboard-grid">
                            <DashboardHeader>
                                <DashboardTitle>Gerencie suas metas</DashboardTitle>
                                <AddButton onClick={() => setIsModalOpen(true)}>
                                    <Plus size={16} /> Adicionar Meta
                                </AddButton>
                            </DashboardHeader>

                            <CardGrid id="cardGrid">
                                {currentTasks.map((task, index) => {
                                    const absoluteIndex = startIndex + index;

                                    return (
                                        <div 
                                            key={absoluteIndex} 
                                            onClick={() => setSelectedTaskIndex(absoluteIndex)} 
                                            style={{ cursor: 'pointer', width: '100%' }}
                                        >
                                            <TaskCard
                                                category={task.category}
                                                title={task.title}
                                                progress={task.progress}
                                                description={task.description}
                                                deadline={task.deadline}
                                                onEdit={() => handleOpenEditModal(absoluteIndex)}
                                                onDelete={() => handleOpenDeleteModal(absoluteIndex)}
                                            />
                                        </div>
                                    );
                                })}
                            </CardGrid>

                            <ViewSelector>
                                <button id="prevBtn" onClick={handlePrev} disabled={currentPage === 1}>
                                    <ChevronLeft size={16} /> Voltar
                                </button>
                                <span id="pageIndicator">{currentPage} / {totalPages}</span>
                                <button id="nextBtn" onClick={handleNext} disabled={currentPage === totalPages}>
                                    Próximo <ChevronRight size={16} />
                                </button>
                            </ViewSelector>
                        </DashboardArea>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isModalOpen && (
                        <AddGoalModal 
                            isOpen={isModalOpen} 
                            onClose={() => setIsModalOpen(false)} 
                            onAddGoal={handleCreateTask} 
                        />
                    )}

                    {isUpdateModalOpen && (
                        <UpdateGoalModal
                            isOpen={isUpdateModalOpen}
                            onClose={() => {
                                setIsUpdateModalOpen(false);
                                setGoalToEdit(null);
                                setEditingIndex(null);
                            }}
                            onUpdateGoal={handleUpdateGoal}
                            initialGoal={goalToEdit}
                        />
                    )}

                    {isDeleteModalOpen && (
                        <ConfirmDeleteModal
                            isOpen={isDeleteModalOpen}
                            onClose={() => {
                                setIsDeleteModalOpen(false);
                                setDeletingIndex(null);
                            }}
                            onConfirm={handleConfirmDelete}
                        />
                    )}
                </AnimatePresence>
            </MainContentWrapper>
        </>
    );
};