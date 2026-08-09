import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { TaskCardView } from '../../components/TaskCardView/TaskCardView';
import { TaskCard } from '../../components/TaskCard/TaskCard';
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
  completed: boolean;
}

interface Task {
  category: string;
  title: string;
  progress: number;
  description: string;
  subtasks?: SubTask[];
}

const initialTasks: Task[] = [
  { 
    category: 'Engenharia de Software', 
    title: 'Frontend', 
    progress: 49, 
    description: 'Conceitos avançados de Frontend',
    subtasks: [
      { id: '1', title: 'Gerenciamento de estado;', completed: false },
      { id: '2', title: 'Testes de Frontend;', completed: false },
      { id: '3', title: 'Performance Web;', completed: false },
      { id: '4', title: 'Segurança no Frontend (XSS, CSRF);', completed: false },
      { id: '5', title: 'SSR / SSG;', completed: false },
      { id: '6', title: 'Microfrontends;', completed: false },
      { id: '7', title: 'Interface de Usuário (UI);', completed: false },
      { id: '8', title: 'Experiência de Usuário (UX);', completed: false },
      { id: '9', title: 'Usabilidade;', completed: false },
      { id: '10', title: 'Responsividade;', completed: false },
      { id: '11', title: 'Consumo de APIs;', completed: false },
      { id: '12', title: 'HTML semântico;', completed: false },
      { id: '13', title: 'Intencionalidade;', completed: false },
      { id: '14', title: 'CSS (Flexbox, Grid);', completed: false },
      { id: '15', title: 'Acessibilidade;', completed: false },
      { id: '16', title: 'Pré-processadores CSS (Sass, Less);', completed: false },
      { id: '17', title: 'Frameworks CSS (Tailwind, Bootstrap);', completed: false },
      { id: '18', title: 'Clean Code e Boas Práticas;', completed: false },
      { id: '19', title: 'TypeScript avançado;', completed: false },
      { id: '20', title: 'Componentização e Design System;', completed: false },
      { id: '21', title: 'Build Tools (Vite, Webpack);', completed: false },
      { id: '22', title: 'Controle de Versão (Git e GitHub);', completed: false },
      { id: '23', title: 'CI/CD para Frontend;', completed: false },
      { id: '24', title: 'Web Vitals e Otimização de SEO;', completed: false },
      { id: '25', title: 'PWA (Progressive Web Apps);', completed: false },
      { id: '26', title: 'WebSockets e Tempo Real;', completed: false },
      { id: '27', title: 'Internacionalização (i18n);', completed: false },
      { id: '28', title: 'Animações e Framer Motion;', completed: false },
      { id: '29', title: 'Arquitetura de Pastas e Escalabilidade;', completed: false },
      { id: '30', title: 'Documentação de Código e Histórias;', completed: false },
    ]
  },
  { category: 'Engenharia de Software', title: 'Backend', progress: 39, description: 'APIs e arquitetura de servidores' },
  { category: 'Engenharia de Software', title: 'Banco de Dados', progress: 19, description: 'Modelagem e otimização' },
  { category: 'Engenharia de Software', title: 'Nuvem', progress: 49, description: 'Deploy e infraestrutura cloud' },
  { category: 'Engenharia de Software', title: 'Versionamento', progress: 57, description: 'Git avançado' },
  { category: 'Engenharia de Software', title: 'Testes', progress: 27, description: 'Testes unitários e e2e' },
];

export const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks] = useState<Task[]>(initialTasks);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);

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
            />
          ) : (
            <DashboardArea key="dashboard-grid">
              <DashboardHeader>
                <DashboardTitle>Gerencie suas metas</DashboardTitle>
                <AddButton>
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
      </MainContentWrapper>
    </>
  );
};