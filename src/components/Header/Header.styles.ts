import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: white;
    padding: 20px 40px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 260px;
    z-index: 2;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 768px) {
        left: 0;
        background: #2e7d32;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const MenuToggle = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 0;
    fill: white;
    transition: fill 0.3s ease;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const SearchContainer = styled.div`
    position: relative;
`;

export const SearchIcon = styled.svg`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    fill: #999;
    transition: fill 0.3s ease;

    @media (max-width: 768px) {
        fill: rgba(255, 255, 255, 0.7);
    }
`;

export const SearchInput = styled.input`
    border: none;
    border-bottom: 1px solid #999;
    padding: 5px 10px 5px 35px;
    width: 250px;
    font-size: 14px;
    outline: none;
    background: transparent;
    color: #333;
    transition: border-color 0.3s ease, color 0.3s ease;

    &::placeholder {
        color: #999;
        transition: color 0.3s ease;
    }

    &:focus {
        border-bottom-color: green;
    }

    @media (max-width: 768px) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        color: white;
        width: 160px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        &:focus {
            border-bottom-color: white;
        }
    }
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const UserAvatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

export const UserName = styled.span`
    font-size: 14px;
    color: #555;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        color: rgba(255, 255, 255, 0.9);
    }
`;