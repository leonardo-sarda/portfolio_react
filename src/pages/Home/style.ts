import styled from 'styled-components';

export const Profile = styled.div`
    text-align: center;
    padding: 24px 0;
    font-weight: 500;
    line-height: 24px;

    img {
        width: 112px;
    }

    p {
        font-weight: 500;
        line-height: 24px;
        margin-top: 8px;
        font-size: 20px;
    }
`;

export const AboutLinks = styled.div`
    text-decoration: none;
    list-style: none;
    font-weight: 500;
    a {
        display: flex;
        align-items: center;
        padding: 16px;
        border-radius: 50%;
        text-decoration: none;
        list-style: none;
        font-weight: 500;
        font-size: 18px;
    }
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
        font-weight: 500;
        list-style: none;

        transition: background 0.5s;

        &:hover {
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid white;
        }
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
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    color: white;
`;
