import React from 'react';
import { css } from '@emotion/core';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { useTheme } from 'emotion-theming';
import { useScroll } from '../hooks';
import Logo from './logo';
import NavButton from './nav-button';
import { Theme } from './layout';
import { GatsbyLink } from './link';

const navItems = ['Services', 'Gear', 'About', 'Contact'];

const backgroundVariants = {
  open: {
    clipPath: 'circle(2000px at 100% 100%)',
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
      damping: 40
    }
  },
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const navListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const navItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const theme = useTheme<Theme>();
  const scrollTo = useScroll({ offset: -48, delay: 400 });
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 3rem;
        background: ${theme.colors.white};
        z-index: 1;
      `}
    >
      <nav
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 15px;
          height: 100%;
          & > svg {
            z-index: 2;
          }
        `}
      >
        <GatsbyLink
          to="/"
          aria-label="go to homepage"
          css={css`
            line-height: 0;
          `}
        >
          <Logo
            fill={`${theme.colors.black}`}
            stroke={`${theme.colors.black}`}
          />
        </GatsbyLink>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="background"
              variants={backgroundVariants}
              initial="closed"
              animate="open"
              exit="closed"
              css={css`
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                background: ${theme.colors.turqoise};
                z-index: 1;
                & + button {
                  z-index: 2;
                }
              `}
            >
              <motion.ul
                key="navList"
                variants={navListVariants}
                css={css`
                  margin: 0;
                  & li {
                    list-style: none;
                    font-size: ${theme.fontSizes['4xl']};
                    font-weight: ${theme.fontWeights.bold};
                  }
                `}
              >
                {navItems.map(item => (
                  <motion.li variants={navItemVariants} key={item}>
                    <a
                      onClick={e => {
                        e.preventDefault();
                        toggleOpen();
                        scrollTo(`#${item.toLowerCase()}`);
                      }}
                      href={`#${item.toLowerCase()}`}
                      css={css`
                        position: relative;
                        text-decoration: none;
                        color: inherit;
                        &:after {
                          content: '';
                          position: absolute;
                          left: 0;
                          bottom: -3px;
                          width: 100%;
                          height: 6px;
                          background: currentColor;
                        }
                        &:visited {
                          color: inherit;
                        }
                      `}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <NavButton isClicked={isOpen} onClick={toggleOpen} />
      </nav>
    </header>
  );
};

export default Header;
