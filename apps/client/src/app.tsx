import React from 'react';
import AppRouting from './app-routing';
import { BrowserRouter } from 'react-router-dom';
import { Main as MainLayout } from './layouts/main';

import './app.scss';

const App = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <AppRouting />
            </MainLayout>
        </BrowserRouter>
    );
};

export default App;
