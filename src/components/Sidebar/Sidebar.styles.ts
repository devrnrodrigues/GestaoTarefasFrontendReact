import styled from 'styled-components';

export const SidebarContainer = styled.nav<{ $isOpen: boolean }>`
    width: 260px;
    background: 
    radial-gradient(circle at 80% 20%, rgba(168, 230, 29, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(46, 125, 50, 0.6) 0%, transparent 60%),
    linear-gradient(135deg, #0b1a0f 0%, #112a17 50%, #050d08 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
    position: fixed;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    z-index: 200;

    @media (max-width: 768px) {
        transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    }
`;

export const SidebarOverlay = styled.div<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 150;
`;

export const Logo = styled.div`
    padding: 0 30px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const LogoIcon = styled.div`
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1B5E20;
`;

export const LogoText = styled.span`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: white;
`;

export const NavLinks = styled.ul`
    list-style: none;
    flex-grow: 1;

    li {
        margin-bottom: 5px;
    }

    a {
        display: flex;
        align-items: center;
        padding: 15px 30px;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: background 0.2s;
        position: relative;

        &:hover, &.active {
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
        }

        &.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            background-color: white;
            border-radius: 0 4px 4px 0;
        }
    }
`;

export const NavIcon = styled.span`
    display: inline-flex;
    align-items: center;
    margin-right: 15px;
    flex-shrink: 0;
`;

export const FooterLinks = styled.ul`
    list-style: none;
    padding: 0 30px;
    display: flex; 
    gap: 12px;

    li {
        margin-bottom: 0;
    }

    a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        font-size: 14px;

        &:hover {
            color: white;
        }
    }
`;

export const Copyright = styled.div`
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    padding: 0 30px;
`;