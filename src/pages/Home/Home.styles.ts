import styled from 'styled-components';

export const MainContentWrapper = styled.main`
    margin-left: 260px;
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const DashboardArea = styled.div`
    padding: 40px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`;

export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const DashboardTitle = styled.h1`
    font-size: 32px;
    font-weight: 400;
    color: #333;
`;

export const ViewSelector = styled.div`
    display: flex;
    font-size: 14px;
    color: #777;
    gap: 15px;
    align-items: center;

    button {
        background: none;
        border: none;
        padding: 4px 10px;
        border-radius: 4px;
        cursor: pointer;
        background: transparent;
        transition: all 0.2s;

        &:hover:not(:disabled) {
            color: #0077B6;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    span.active {
        color: #0077B6;
        font-weight: bold;
    }
`;

export const AddButton = styled.button`
    background-color: white;
    color: #0077B6;
    border: 1px solid #0077B6;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
        background-color: #0077B6;
        color: white;
    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
    justify-content: start;
    width: auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;