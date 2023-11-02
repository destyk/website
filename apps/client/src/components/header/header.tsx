import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePathname } from '../../hooks/use-pathname';

import './header.scss';

const navItems = [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '/about',
        name: 'about'
    },
    {
        path: '/articles',
        name: 'articles'
    },
    {
        path: '/contact',
        name: 'contact'
    }
];

const Header = () => {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = React.useState(pathname);

    React.useEffect(() => {
        setHoveredPath(pathname);
    }, [pathname]);

    return (
        <header className="header d-flex d-sm-block">
            <nav className="nav nav-masthead justify-content-center pb-sm-0 pb-3">
                {navItems.map((item) => {
                    const isActive = item.path === pathname;
                    const isActiveLinkClass = isActive ? 'active' : '';

                    return (
                        <Link
                            key={item.path}
                            className={`nav-link position-relative ${isActiveLinkClass}`}
                            to={item.path}
                            onMouseOver={() => setHoveredPath(item.path)}
                            onMouseLeave={() => setHoveredPath(pathname)}>
                            <span className="nav-title">{item.name}</span>
                            {item.path === hoveredPath && (
                                <motion.span
                                    layoutId="navbar"
                                    data-active={isActive}
                                    className="link-bg"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 280,
                                        damping: 24
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};

export { Header };
