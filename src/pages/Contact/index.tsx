import React from 'react';
import logoImg from '../../assets/avatar.png';
import GithubIcon from '../../assets/fav-icon/git.png';
import Linkedin from '../../assets/fav-icon/Vector.png';
import { Profile, AboutLinks, SocialLinks, Final, ComeBack } from './style';
import { FiChevronRight, FiChevronsLeft, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <>
            <Profile>
                <img src={logoImg} alt="Leonardo Sardá" />

                <Link to="/">
                    <FiChevronsLeft size={15} />
                </Link>
            </Profile>
            <h1>Contato</h1>
            <AboutLinks></AboutLinks>
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

export default Contact;
