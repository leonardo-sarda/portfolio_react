import React from 'react';
import logoImg from '../../assets/avatar.png';
import GithubIcon from '../../assets/fav-icon/git.png';
import Linkedin from '../../assets/fav-icon/Vector.png';
import { Profile, AboutLinks, SocialLinks, Final, ComeBack } from './style';
import {
    FiChevronRight,
    FiChevronsLeft,
    FiGithub,
    FiMail,
    FiMessageCircle,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <>
            <Profile>
                <Link to="/">
                    <FiChevronsLeft size={15} />
                </Link>
            </Profile>
            <AboutLinks>
                <ul>
                    <li>
                        <Link
                            to="mailto:leonardo_Sarda@hotmail.com"
                            target="__blank"
                        >
                            <FiMail size={25} />
                            Leonardo_sarda@hotmail.com
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <FiMessageCircle size={25} />
                            (48) 98426-1160
                        </Link>
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
                <p>
                    Feito por
                    <a href="https://portfolio-react-bay-mu.vercel.app">
                        Leonardo Sardá
                    </a>
                </p>
            </Final>
        </>
    );
};

export default Contact;
