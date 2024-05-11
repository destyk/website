import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import styles from './header.module.scss';

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
  const { pathname } = useRouter();
  const [hoveredPath, setHoveredPath] = React.useState(pathname);

  React.useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  return (
    <header className={clsx(styles.header, 'd-flex', 'd-sm-block')}>
      <nav
        className={clsx(
          styles['nav'],
          styles['nav-masthead'],
          'justify-content-center',
          'pb-sm-0',
          'pb-3'
        )}>
        {navItems.map((item) => {
          const isActive = item.path === pathname;
          const isActiveLinkClass = isActive ? styles['active'] : '';

          return (
            <Link
              key={item.path}
              className={clsx(styles['nav-link'], 'position-relative', isActiveLinkClass)}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}>
              <span className="nav-title">{item.name}</span>
              {item.path === hoveredPath && (
                <motion.span
                  layoutId="navbar"
                  data-active={isActive}
                  className={styles['link-bg']}
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

export default Header;
