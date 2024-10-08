import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import RoutesComponents from './routes';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <RoutesComponents />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;
