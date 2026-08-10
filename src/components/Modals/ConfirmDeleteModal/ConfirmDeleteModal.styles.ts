import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
`;

export const ModalContainer = styled(motion.div)`
    background: #ffffff;
    width: 100%;
    max-width: 420px;
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 20px;
`;

export const ModalHeader = styled.div`
    padding: 24px 24px 16px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;

    p {
        margin-top: 4px;
        font-size: 0.875rem;
        color: #64748b;
        line-height: 1.5;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0;
    line-height: 1.25;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
        background: #f1f5f9;
        color: #0f172a;
    }
`;

export const ModalFooter = styled.div`
    padding: 16px 24px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
`;

export const CancelButton = styled.button`
    padding: 10px 16px;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    color: #334155;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #f8fafc;
        border-color: #94a3b8;
    }
`;

export const SubmitButton = styled.button`
    padding: 10px 16px;
    background: #dc2626;
    border: none;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;