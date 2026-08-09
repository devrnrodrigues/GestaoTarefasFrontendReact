import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #ffffff;
background-image: 
    radial-gradient(at 10% 20%, #f4f4f4 0px, #ffffff 50%),
    radial-gradient(at 90% 80%, #ebebeb 0px, #ffffff 50%);
    background-size: 100% 100%, 100% 100%;
    padding: 20px 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1
    );
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
        background: 
    radial-gradient(circle at 80% 20%, rgba(168, 230, 29, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(46, 125, 50, 0.6) 0%, transparent 60%),
    linear-gradient(135deg, rgba(11, 26, 15, 0.85) 0%, rgba(17, 42, 23, 0.85) 50%, rgba(5, 13, 8, 0.85) 100%);
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