import React from 'react';
import logoImg from '../../assets/avatar.png';
import GithubIcon from '../../assets/fav-icon/git.png';
import Linkedin from '../../assets/fav-icon/Vector.png';
import { Profile, AboutLinks, SocialLinks, Final, ComeBack } from './style';
import { FiChevronRight, FiChevronsLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <Profile>
                <img src={logoImg} alt="Leonardo Sardá" />
                <p>Leonardo Sardá</p>
            </Profile>
            <ComeBack>
                <Link to="/">
                    <FiChevronsLeft size={15} />
                </Link>
            </ComeBack>
            <AboutLinks>
                <ul>
                    <li>
                        Sou um apaixonado por tecnologia, adoro aprender novas
                        coisas e sempre busco oportunidades de crescimento
                        profissional, disciplinado, motivado e com uma
                        experiência de 3 anos na área de sistemas ERP, incluindo
                        o Consinco TOTVS e o SENIOR tanto como o industrial e
                        HCM. Vivência com PHP e PL/SQL Oracle, para
                        desenvolvimento de relatórios, intranet e aplicações
                        web. As minhas habilidades técnicas também incluem HTML,
                        CSS, JavaScript, React, React native e Nodejs.
                    </li>
                    <h1>Minhas Experiencias</h1>
                    <li>
                        Sou um apaixonado por tecnologia, adoro aprender novas
                        coisas e sempre busco oportunidades de crescimento
                        profissional.
                    </li>
                    <li>
                        <Link to="/">
                            Analista de TI
                            <br />
                            Analista de Aprovisionamento - Supply ChainAnalista
                            de Aprovisionamento - Supply Chain jun de 2020 - fev
                            de 2021 · 9 mesesDe jun de 2020 até fev de 2021 · 9
                            meses São Bento do Sul, Santa Catarina, Brasil
                        </Link>
                    </li>
                </ul>
            </AboutLinks>
            <SocialLinks>
                <a
                    href="https://github.com/LeonardoSarda"
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
