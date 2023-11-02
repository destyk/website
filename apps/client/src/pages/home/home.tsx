import React from 'react';
import logo from '../../assets/images/logo.svg';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Image } from '../../components/ui/image';
import { useDocumentTitle } from '../../hooks/use-document-title';

import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    useDocumentTitle(`Home`);

    return (
        <motion.main
            className="home mt-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
                className="pb-3"
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ duration: 1.3, loop: Infinity, delay: 0.1 }}>
                <Image src={logo} className="rounded photo" alt="DestyK" />
            </motion.div>
            <div>
                <h1>
                    destyk<span className="linear-gradient-text">.</span>
                </h1>
                <p>
                    <strong>Fullstack-developer</strong> & <strong>Software Engineer</strong>
                </p>
                <p>
                    Passionate about developing high-load web applications. Learning
                    technologies that I found interesting. Well, Im also a crazy fan of
                    aesthetics and perfectionism :)
                </p>
                <Link to="/about" className="btn btn-secondary">
                    {isMobile && <span>Tap to find out about me →</span>}
                    {!isMobile && <span>Click to find out about me →</span>}
                </Link>
            </div>
        </motion.main>
    );
};

export default Home;
