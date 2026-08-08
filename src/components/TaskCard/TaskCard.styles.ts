import styled from 'styled-components';

export const CardContainer = styled.div`
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    border-radius: 30px;
    padding: 40px;
    color: #333333;
    box-shadow: 0 4px 5px rgba(0,0,0,0.09);
    overflow: hidden;
    position: relative;
    justify-content: space-between;
    transition: transform 0.1s ease-out, box-shadow 0.3s ease, background 0.3s ease;
    transform-style: preserve-3d;
    will-change: transform;

    &:hover {
        background: rgba(255, 255, 255, 0.65);
        box-shadow: 0 16px 32px rgba(46, 125, 50, 0.08);
    }
`;

export const CardInfoIcon = styled.svg`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 24px;
    color: #888;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #333;
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
    height: 10px;
    background-color: #E0E0E0;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 8px;
`;

export const ProgressBar = styled.div<{ $progress: number }>`
    height: 100%;
    background-color: #66BB6A;
    width: ${({ $progress }) => `${$progress}%`};
    transition: width 0.6s ease-out;
    border-radius: 5px;
`;

export const ProgressText = styled.div`
    font-size: 14px;
    color: #666;
    text-align: right;
    font-weight: 600;
`;