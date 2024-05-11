import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileEarmarkPdf } from 'react-bootstrap-icons';
import getPdfUrlHelper from '@shared/helpers/get-pdf-url.helper';

const resumePDF = getPdfUrlHelper('resume.pdf');

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="My contact details" />
      </Head>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="row">
          <div className="col-12">
            <h1 className="gradient-text-purple mb-3">Contact Me.</h1>
            <p>
              Inquiries via email at{' '}
              <a href="mailto:nikita.karpov.1910@mail.ru">nikita.karpov.1910@mail.ru</a> or via
              socials below:
            </p>
            <ul>
              <li>
                Github -{' '}
                <a href="https://github.com/destyk" target="_blank" rel="noreferrer">
                  https://github.com/destyk
                </a>
              </li>
              <li>
                Telegram -{' '}
                <a href="https://t.me/destykarpov" target="_blank" rel="noreferrer">
                  https://t.me/destykarpov
                </a>
              </li>
            </ul>
            <a href={resumePDF} target="_blank" className="btn btn-secondary" rel="noreferrer">
              <FileEarmarkPdf /> View my resume in pdf format
            </a>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default ContactPage;
