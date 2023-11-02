import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useDocumentTitle } from '../../hooks/use-document-title';

const NotFound = () => {
    useDocumentTitle(`Oops! Not Found`);

    return (
        <motion.main
            className="not-found mt-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1 className="display-1 fw-bold">404</h1>
            <p>The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="btn btn-secondary">
                {isMobile && <span> Tap to go home →</span>}
                {!isMobile && <span>Click to go home →</span>}
            </Link>
        </motion.main>
    );
};

export default NotFound;
