import React, { PropsWithChildren } from 'react';
// import algoliasearch from 'algoliasearch/lite';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

// const searchClient = algoliasearch('R2F34G5GQR', '245b176662fddaf9e6141bbff8861a3e');

const Main = (props: PropsWithChildren) => {
    return (
        <React.Fragment>
            <AnimatePresence>
                <div className="container-boxed d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <div className="pb-5">
                        <Header />
                    </div>
                    {props.children}
                    <Footer />
                </div>
                <motion.div
                    key="background"
                    className="background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    );
};

export { Main };
