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
    display: flex;
    flex-direction: column;
    padding-top: 15px;
`;

export const ProgressBar = styled.div`
    flex: 1;
    background-color: #E0E0E0;
    height: 10px;
    border-radius: 5px;
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
    color: #2E7D32;
    border: 1px solid #2E7D32;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    &:hover {
        background: 
            radial-gradient(circle at 80% 20%, rgba(168, 230, 29, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(46, 125, 50, 0.6) 0%, transparent 60%),
            linear-gradient(135deg, #0b1a0f 0%, #112a17 50%, #050d08 100%);
        color: white;
    }
`;