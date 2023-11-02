import React from 'react';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../../hooks/use-document-title';

const Articles = () => {
    useDocumentTitle(`Articles`);

    return (
        <motion.main
            className="articles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="row">
                <h1 className="gradient-text-gold mb-3">Articles. Stories. Guides.</h1>
                <div className="col-md-6 col-12">
                    <p>This section is under development :)</p>
                </div>
            </div>
        </motion.main>
    );
};

export default Articles;
