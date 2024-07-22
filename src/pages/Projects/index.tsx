import React from 'react';
import logoImg from '../../assets/avatar.png';
import GithubIcon from '../../assets/fav-icon/git.png';
import Linkedin from '../../assets/fav-icon/Vector.png';
import { Profile, AboutLinks, SocialLinks, Final, ComeBack } from './style';
import { FiChevronRight, FiChevronsLeft, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
                            to="https://github-explore-delta.vercel.app"
                            target="__blank"
                        >
                            Github Explore
                        </Link>
                        <Link
                            to="https://github.com/leonardo-sarda/github_explore"
                            target="__blank"
                        >
                            Repositório <FiGithub />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Controle Financeiro</Link>
                        <Link
                            to="https://github.com/leonardo-sarda/go_finance"
                            target="__blank"
                        >
                            Repositório <FiGithub />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Agendamento de Barbearia</Link>
                        <Link
                            to="https://github.com/leonardo-sarda/goBarber"
                            target="__blank"
                        >
                            Repositório <FiGithub />
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
                <p>Feito por Leonardo Sardá</p>
            </Final>
        </>
    );
};

export default Home;
