import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'react-bootstrap-icons';
import { Image } from '../../components/ui/image';
import { useDocumentTitle } from '../../hooks/use-document-title';

import pdf from '../../types.s';
import logo from '../../assets/images/about-destyk.png';
import './about.scss';

const resumePDF = pdf('resume.pdf');

const About = () => {
    useDocumentTitle(`About`);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about">
            <div className="row">
                <h1 className="gradient-text-cyan mb-3">Creativity Comes First.</h1>
                <div className="col-md-6 col-12">
                    <Image src={logo} className="rounded photo" alt="DestyK" />
                </div>
                <div className="col-md-6 col-12 mt-md-0 mt-4">
                    <p>
                        <span className="text-white">Hey, Im Nikita Arefev</span> I started as
                        a software engineer back in 2015, working with C#.
                    </p>
                    <p>
                        I currently live in Russia. In my free time from work I like to{' '}
                        <span className="text-white">make music</span> in all its forms :)
                    </p>
                    <p>
                        I have <span className="text-white">quite a lot</span> of completed
                        custom projects behind me, in which I participated as a{' '}
                        <span className="text-white">backend developer</span>,{' '}
                        <span className="text-white">frontend developer</span>, and sometimes
                        even as a designer.
                    </p>
                </div>
                <div className="col-12 mt-4">
                    <h2>Quick bio</h2>
                    <blockquote>
                        As a backend developer, i have experience in designing and implementing
                        server-side applications and APIs that power web and mobile
                        applications. I am proficient in programming languages PHP,
                        JavaScript/TypeScript, Python, C# and have expertise in frameworks
                        like, React, Angular, NestJS, NextJS, Phalcon PHP, Laravel. I have a
                        solid understanding of data structures, algorithms, and databases like
                        MySQL, PostgreSQL, or MongoDB, and are familiar with tools and
                        technologies like Git, Docker, RabbitMQ, Redis. I am passionate about
                        writing clean, maintainable, and testable code, and enjoy learning new
                        technologies and best practices to improve my craft.
                    </blockquote>
                    <div className="mt-4">
                        <a href={resumePDF} download className="btn btn-secondary">
                            <Download /> Download resume
                        </a>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default About;
