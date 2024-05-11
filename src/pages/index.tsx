import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import clsx from 'clsx';

import logo from '@assets/images/logo.svg';
import styles from './index.module.scss';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <motion.main
        className={clsx(styles['home'], 'mt-auto', 'text-center')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <motion.div
          className="pb-3"
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 1.3, loop: Infinity, delay: 0.1 }}>
          <Image
            src={logo.src}
            className={clsx(styles['photo'], 'rounded')}
            alt="DestyK"
            width={125}
            height={125}
          />
        </motion.div>
        <div>
          <h1>
            destyk<span className="linear-gradient-text">.</span>
          </h1>
          <p>
            <strong>Fullstack-developer</strong> & <strong>Software Engineer</strong>
          </p>
          <p>
            Passionate about developing high-load web applications. Learning technologies that
            I found interesting. Well, Im also a crazy fan of aesthetics and perfectionism :)
          </p>
          <Link href="/about" className="btn btn-secondary">
            {isMobile && <span>Tap to find out about me →</span>}
            {!isMobile && <span>Click to find out about me →</span>}
          </Link>
        </div>
      </motion.main>
    </>
  );
};

export default HomePage;
