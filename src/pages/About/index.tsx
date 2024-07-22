import React from 'react';
import logoImg from '../../assets/avatar.png';
import GithubIcon from '../../assets/fav-icon/git.png';
import Linkedin from '../../assets/fav-icon/Vector.png';
import Belem from '../../assets/belem.jpeg';
import {
    Profile,
    AboutLinks,
    SocialLinks,
    Final,
    ComeBack,
    CompanyProfile,
    Skills,
} from './style';
import { FiChevronRight, FiChevronsLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <Profile>
                <Link to="/">
                    <FiChevronsLeft size={15} />
                </Link>
            </Profile>
            <h1>Sobre</h1>
            <CompanyProfile>
                <ul>
                    <li>
                        Sou um profissional com 3 anos de experiência em
                        sistemas ERP como Consinco TOTVS e SENIOR, com foco em
                        desenvolvimento de relatórios, intranets e aplicações
                        web usando PHP, PL/SQL Oracle, HTML, CSS, JavaScript,
                        React, React Native e Node.js. Tenho paixão por
                        tecnologia e estou sempre buscando oportunidades para
                        aprender e crescer profissionalmente. Além disso, possuo
                        conhecimento em Git, GitHub, Docker e TypeScript,
                        essenciais para colaboração e desenvolvimento eficiente
                        de software.
                    </li>
                </ul>
            </CompanyProfile>
            <h1>Minhas Experiencias</h1>
            <AboutLinks>
                <CompanyProfile>
                    <ul>
                        <a href="https://www.linkedin.com/company/abi-belem-&-cia-ltda---supermercados-belem/">
                            <img src={Belem} alt="" />
                            <p>Abi Belem & Cia Ltda - Supermercados Belem </p>
                        </a>
                        <li>
                            Analista de TI <br></br>outubro de 2023 até abril de
                            2024 - 7 meses
                        </li>
                        <li>
                            Assistente de TI <br></br> fevereiro de 2021 até
                            outubro de 2023 - 2 anos 9 meses
                        </li>
                        <li>
                            Analista de Aprovisionamento - Supply Chain
                            <br></br> Junho de 2020 até Feveriero de 2021 - 9
                            meses
                        </li>
                    </ul>
                </CompanyProfile>
            </AboutLinks>
            <h1>Habilidades</h1>
            <Skills>
                <tbody>
                    <tr>
                        <td>PHP</td>
                        <td>HTML</td>
                        <td>CSS</td>
                        <td>JAVASCRIPT</td>
                    </tr>
                    <tr>
                        <td>REACT</td>
                        <td>REACT-NATIVE</td>
                        <td>NODEJS</td>
                        <td>TYPESCRIPT</td>
                    </tr>
                    <tr>
                        <td>MYSQL</td>
                        <td>ORACLE</td>
                        <td>PL/SQL</td>
                        <td>POSTGRESQL</td>
                    </tr>
                </tbody>
            </Skills>
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

export default Home;
