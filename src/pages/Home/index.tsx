import React from 'react';
import logoImg from '../../assets/avatar.png';
import GithubIcon from '../../assets/fav-icon/git.png';
import Linkedin from '../../assets/fav-icon/Vector.png';
import { Profile, AboutLinks, SocialLinks, Final } from './style';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <Profile>
                <img src={logoImg} alt="Leonardo Sardá" />
                <p>Leonardo Sardá</p>
            </Profile>
            <AboutLinks>
                <ul>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </AboutLinks>
            <SocialLinks>
                <a
                    href="https://github.com/leonardo-sarda"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={GithubIcon} alt="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/leonardo-sardá/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Linkedin} alt="" />
                </a>
            </SocialLinks>
            <Final>
                <p>Feito por Leonardo Sardá</p>
            </Final>
        </>
    );
};

export default Home;
