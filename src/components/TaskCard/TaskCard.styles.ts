import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    border-radius: 30px;
    padding: 40px;
    color: #333333;
    box-shadow: 0 4px 5px rgba(0,0,0,0.3);
    overflow: hidden;
    position: relative;
    justify-content: space-between;
    transition: box-shadow 0.3s ease, background 0.3s ease;
    transform-style: preserve-3d;
    will-change: transform;

    &:hover {
        box-shadow: 0 16px 32px rgba(0,0,0,0.2);
        backdrop-filter: blur(0);
        -webkit-backdrop-filter: blur(0);
    }
`;

export const CardInfoIcon = styled.span`
    position: absolute;
    top: 30px;
    right: 30px;
    color: #888;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        color: #2E7D32;
        transform: scale(1.1);
    }
`;

export const CardCategory = styled.div`
    font-size: 12px;
    color: #777;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const CardTitle = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #222;
`;

export const ProgressContainer = styled.div`
    height: 14px;
    background-color: #E0E0E0;
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 8px;
    position: relative;
`;

export const ProgressBar = styled.div<{ $progress: number }>`
    height: 100%;
    background-color: #66BB6A;
    width: ${({ $progress }) => `${$progress}%`};
    transition: width 0.6s ease-out;
    border-radius: 7px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 24px;
`;

export const ProgressTextInside = styled.span`
    position: absolute;
    right: 6px;
    font-size: 9px;
    color: black;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
`;

export const ProgressText = styled.div`
    font-size: 14px;
    color: #666;
    text-align: right;
    font-weight: 600;
`;