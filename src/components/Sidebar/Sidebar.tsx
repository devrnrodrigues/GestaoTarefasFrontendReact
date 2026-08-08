import React from 'react';
import {
  SidebarContainer,
  SidebarOverlay,
  Logo,
  LogoIcon,
  LogoText,
  NavLinks,
  NavIcon,
  FooterLinks,
  Copyright
} from './Sidebar.styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <SidebarOverlay $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <div>
          <Logo>
            <LogoIcon>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </LogoIcon>
            <LogoText>GestãoTarefas</LogoText>
          </Logo>
          <NavLinks>
            <li>
              <a href="#" className="active">
                <NavIcon viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </NavIcon>
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#">
                <NavIcon viewBox="0 0 24 24">
                  <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.914 8.914 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </NavIcon>
                <span>Histórico</span>
              </a>
            </li>
            <li>
              <a href="#">
                <NavIcon viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.03-.42 1.98-1.03 2.75z"/>
                </NavIcon>
                <span>Como usar?</span>
              </a>
            </li>
            <li>
              <a href="#">
                <NavIcon viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </NavIcon>
                <span>Sobre nós</span>
              </a>
            </li>
          </NavLinks>
        </div>
        <div>
          <FooterLinks>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Sair</a></li>
          </FooterLinks>
          <Copyright>
            &copy; 2026 Gestao de Tarefas.
          </Copyright>
        </div>
      </SidebarContainer>
    </>
  );
};