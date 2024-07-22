import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    justify-content: right;
    padding: 24px 0;
    font-weight: 500;
    line-height: 24px;
    align-items: center;

    img {
        width: 50px;
        display: flex;
        justify-content: left;
        border-radius: 50%;
    }

    p {
        font-weight: 500;
        line-height: 24px;
        margin-top: 8px;
        text-align: left;
    }
`;

export const CompanyProfile = styled.div`
    display: flex;
    justify-content: left;
    padding: 15px 0;
    font-weight: 500;
    line-height: 24px;
    align-items: center;
    border-radius: 8px;

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.5);
    margin-bottom: 50px;
    margin-top: 50px;

    img {
        width: 50px;
        display: flex;
        justify-content: left;
        border-radius: 50%;
    }

    p {
        font-weight: 500;
        line-height: 24px;
        margin-top: 8px;
        text-align: left;
    }

    li {
        display: flex;
        justify-content: left;
        padding-left: 30px;
        font-weight: 500;
        line-height: 24px;
    }

    /*ul {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 16px;
        border-radius: 50%;
        text-decoration: none;
        list-style: none;

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

        backdrop-filter: blur(4px);
        list-style: none;

        transition: background 0.5s;

        &:hover {
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid white;
        }
    }*/
`;

export const AboutLinks = styled.div`
    text-decoration: none;
    list-style: none;
    font-weight: 500;
    font-size: 18px;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;

    a {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 16px;
        border-radius: 50%;
        text-decoration: none;
        list-style: none;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px 0;
        text-decoration: none;
        border-radius: 8px;
    }

    li a {
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
`;

export const Skills = styled.table`
    border-radius: 10%;
    width: 100%;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 50px;
    td {
        border: 1px solid #ccc;
        text-align: center; /* Centraliza o texto dentro das células */
        border-radius: 50px;
        padding: 5px;
        background: rgba(255, 255, 255, 0.05);
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
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

export const ComeBack = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;
