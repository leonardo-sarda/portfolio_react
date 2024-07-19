import React from 'react';
import { Routes, Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

const RoutesComponents: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
);

export default RoutesComponents;
