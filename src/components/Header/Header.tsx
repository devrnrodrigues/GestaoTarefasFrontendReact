import React from 'react';
import {
  HeaderContainer,
  HeaderLeft,
  MenuToggle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  UserProfile,
  UserAvatar,
  UserName
} from './Header.styles';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <MenuToggle onClick={onToggleSidebar} aria-label="Abrir menu">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </MenuToggle>
        <SearchContainer>
          <SearchIcon viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </SearchIcon>
          <SearchInput type="text" placeholder="Buscar tarefas" />
        </SearchContainer>
      </HeaderLeft>
      <UserProfile>
        <UserAvatar src="https://i.pravatar.cc/150?img=11" alt="Renan Rodrigues" />
        <UserName>Renan Rodrigues</UserName>
      </UserProfile>
    </HeaderContainer>
  );
};