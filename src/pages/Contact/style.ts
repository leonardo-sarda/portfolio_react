import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    font-weight: 500;
    line-height: 24px;
    align-items: center;

    img {
        width: 112px;
        display: flex;
        justify-content: right;
    }

    p {
        font-weight: 500;
        line-height: 24px;
        margin-top: 8px;
        text-align: left;
    }
`;

export const AboutLinks = styled.div`
    text-decoration: none;
    list-style: none;
    font-weight: 500;
    font-size: 25px;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px 0;
        text-decoration: none;
    }

    ul li a {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 16px 24px;

        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.5);
        text-decoration: none;
        border-radius: 8px;
        backdrop-filter: blur(4px);
        list-style: none;

        transition: background 0.5s;

        &:hover {
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid white;
        }
    }

    svg {
        margin-right: 8px; /* Espaçamento entre o ícone e o texto */
    }
`;
export const SocialLinks = styled.div`
    padding: 24px 0;
    display: flex;
    /*gap:32px;*/
    justify-content: center;
    font-size: 24px;

    a {
        display: flex;
        align-items: center;
        padding: 16px;
        border-radius: 50%;
        transition: background 0.5s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;

export const Final = styled.p`
    text-align: center;
    padding: 24px 0;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: white;
`;

export const ComeBack = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;
