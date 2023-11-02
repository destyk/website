import React from 'react';
import { BodyText, Telegram, Github, HeartFill } from 'react-bootstrap-icons';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer mt-auto pt-5">
            <ul className="nav pb-1 mb-1 justify-content-center">
                <li className="nav-item">
                    <a
                        href="https://github.com/destyk/website/blob/main/LICENSE"
                        target="_blank"
                        className="nav-link px-3"
                        rel="noreferrer">
                        <BodyText className="icon pe-1"></BodyText>
                        <span className="d-none d-lg-inline-block">license</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://t.me/destykarpov"
                        target="_blank"
                        className="nav-link px-3"
                        rel="noreferrer">
                        <Telegram className="icon pe-1"></Telegram>
                        <span className="d-none d-lg-inline-block">telegram</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://github.com/destyk"
                        target="_blank"
                        className="nav-link px-3"
                        rel="noreferrer">
                        <Github className="icon pe-1"></Github>
                        <span className="d-none d-lg-inline-block">github</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://github.com/destyk/website"
                        target="_blank"
                        className="nav-link px-3"
                        rel="noreferrer">
                        <HeartFill className="icon text-danger pe-1"></HeartFill>
                        <span className="d-none d-lg-inline-block">source code</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export { Footer };
