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
  { category: 'Estudos', title: 'Estudar Python', progress: 75, description: 'Aprender conceitos avançados de orientação a objetos e criar um projeto prático.' },
  { category: 'Saúde', title: 'Ir para academia', progress: 57, description: 'Focar no treino de superiores e fazer 30 minutos de cardio no pós-treino.' },
  { category: 'Estudos', title: 'Ler mais livros', progress: 25, description: 'Concluir pelo menos dois capítulos do livro atual por dia antes de dormir.' },
  { category: 'Corrida', title: 'Correr uma maratona', progress: 40, description: 'Manter a constância nos treinos de resistência e aumentar a distância aos poucos.' },
  { category: 'Vida', title: 'Juntar dinheiro', progress: 67, description: 'Guardar 20% de toda entrada mensal em uma aplicação de renda fixa.' },
  { category: 'Finanças', title: 'Não gastar à toa', progress: 33, description: 'Evitar compras por impulso e registrar todos os gastos no aplicativo de controle.' },
  { category: 'Trabalho', title: 'Atualizar Portfólio', progress: 90, description: 'Adicionar os últimos projetos desenvolvidos com React e TypeScript.' },
  { category: 'Casa', title: 'Limpar a casa', progress: 10, description: 'Organizar os cômodos, lavar as louças e recolher o lixo acumulado.' },
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
                description={task.description}
              />
            ))}
          </CardGrid>
        </DashboardArea>
      </MainContentWrapper>
    </>
  );
};