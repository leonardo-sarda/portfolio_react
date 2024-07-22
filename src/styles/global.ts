import { createGlobalStyle } from 'styled-components';

import PortBackground from '../assets/Background.svg';

export default createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
}

body{
    background:  url(${PortBackground}) no-repeat center/cover ;
    -webkit-font-smoothing: antialiased;
    height: auto;

    h1 {
        align-items: center;
        display: flex;
        text-align: center;
        justify-content: center;
    }





    font-family: "Inter", sans-serif;
    color: white;


}
#root{
    width: 100%;
    max-width: 588px;
    margin: 56px auto 0px;
    padding: 0 24px;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    color: white;
}

a
   { outline: none;
  text-decoration: none;
  color: inherit; }

`;
