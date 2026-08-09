import styled from 'styled-components';

export const MainContentWrapper = styled.main`
    margin-left: 260px;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    min-height: 100vh;
    transition: margin-left 0.3s ease-in-out;
    background-color: #ffffff;
    background-image: 
        radial-gradient(at 10% 20%, rgba(46, 125, 50, 0.06) 0px, transparent 50%),
        radial-gradient(at 90% 80%, rgba(168, 230, 29, 0.08) 0px, transparent 50%);
    background-size: 100% 100%, 100% 100%;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const DashboardArea = styled.div`
    padding: 40px;
    width: 100%;
    max-width: 1525px;
    margin: 50px auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const DashboardTitle = styled.h1`
    font-size: 32px;
    font-weight: 400;
    color: #333;

    @media (max-width: 868px) {
        display: none;
    }
`;

export const ViewSelector = styled.div`
    display: flex;
    font-size: 14px;
    color: #777;
    gap: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    button {
        background: none;
        border: none;
        padding: 4px 10px;
        border-radius: 4px;
        cursor: pointer;
        background: transparent;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 6px;

        &:hover:not(:disabled) {
            color: #2E7D32;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    span.active {
        color: #2E7D32;
        font-weight: bold;
    }
`;

export const AddButton = styled.button`
    background: transparent;
    color: #2E7D32;
    border: 1px solid #2E7D32;
    padding: 8px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
        background: 
            radial-gradient(circle at 80% 20%, rgba(168, 230, 29, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(46, 125, 50, 0.6) 0%, transparent 60%),
            linear-gradient(135deg, #0b1a0f 0%, #112a17 50%, #050d08 100%);
        color: white;
        border-color: transparent;
        box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25);
    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
    justify-content: center;
`;