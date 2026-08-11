import React from 'react';
import logo from '../../assets/logo.png';
import { Home as HomeIcon, History, HelpCircle, Info } from 'lucide-react';
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
                <img src={logo} alt="GestãoMetas" />
              </LogoIcon>
            <LogoText>GestãoMetas</LogoText>
          </Logo>
          <NavLinks>
            <li>
              <a href="#" className="active">
                <NavIcon>
                  <HomeIcon size={20} />
                </NavIcon>
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#">
                <NavIcon>
                  <History size={20} />
                </NavIcon>
                <span>Histórico</span>
              </a>
            </li>
            <li>
              <a href="#">
                <NavIcon>
                  <HelpCircle size={20} />
                </NavIcon>
                <span>Como usar?</span>
              </a>
            </li>
            <li>
              <a href="#">
                <NavIcon>
                  <Info size={20} />
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