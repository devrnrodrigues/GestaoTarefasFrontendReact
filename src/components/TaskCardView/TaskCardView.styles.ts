import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionViewContainer = styled(motion.div)`

  max-width: 1500px;
  width: 100%;
  margin: 100px auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.09);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #222;
  text-align: center;
`;

export const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 4px 26px 4px 6px;

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05); 
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2); 
    border-radius: 4px;
    
    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
  margin-top: auto;
  text-align: center;
`;

export const ProgressBar = styled.div`
  flex: 1;
  background-color: #E0E0E0;
  height: 10px;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $width: number }>`
  width: ${({ $width }) => `${$width}%`};
  background-color: #66BB6A;
  height: 100%;
  transition: width 0.4s;
`;

export const AddButton = styled.button`
  background: transparent;
  border: 1px solid #ccc;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
`;