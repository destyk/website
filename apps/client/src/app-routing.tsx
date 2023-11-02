import React from 'react';
import lazyLoader from 'react-imported-component';
import { Routes, Route } from 'react-router-dom';

const Home = lazyLoader(() => import('./pages/home/home'));
const About = lazyLoader(() => import('./pages/about/about'));
const Articles = lazyLoader(() => import('./pages/articles/articles'));
const Contact = lazyLoader(() => import('./pages/contact/contact'));
const NotFound = lazyLoader(() => import('./pages/not-found/not-found'));

const AppRouting = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouting;
