import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
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

const allTasks = [
  { category: 'Estudos', title: 'Estudar Python', progress: 75 },
  { category: 'Saúde', title: 'Ir para academia', progress: 57 },
  { category: 'Estudos', title: 'Ler mais livros', progress: 25 },
  { category: 'Corrida', title: 'Correr uma maratona', progress: 40 },
  { category: 'Vida', title: 'Juntar dinheiro', progress: 67 },
  { category: 'Finanças', title: 'Não gastar à toa', progress: 33 },
  { category: 'Trabalho', title: 'Atualizar Portfólio', progress: 90 },
  { category: 'Casa', title: 'Limpar a casa', progress: 10 },
];

export const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(allTasks.length / cardsPerPage) || 1;

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTasks = allTasks.slice(startIndex, startIndex + cardsPerPage);

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
        <DashboardArea>
          <DashboardHeader>
            <DashboardTitle>Início</DashboardTitle>
            <ViewSelector>
              <button id="prevBtn" onClick={handlePrev} disabled={currentPage === 1}>
                Voltar
              </button>
              <span id="pageIndicator">{currentPage} / {totalPages}</span>
              <button id="nextBtn" onClick={handleNext} disabled={currentPage === totalPages}>
                Próximo
              </button>
            </ViewSelector>
            <AddButton> + Adicionar Card</AddButton>
          </DashboardHeader>

          <CardGrid id="cardGrid">
            {currentTasks.map((task, index) => (
              <TaskCard
                key={index}
                category={task.category}
                title={task.title}
                progress={task.progress}
              />
            ))}
          </CardGrid>
        </DashboardArea>
      </MainContentWrapper>
    </>
  );
};