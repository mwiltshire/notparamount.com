import React from 'react';
import { css } from '@emotion/core';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { useTheme } from 'emotion-theming';
import NavButton from './nav-button';
import { Theme } from './layout';

const navItems = ['Services', 'Gear', 'About', 'Contact'];

const backgroundVariants = {
  open: {
    clipPath: 'circle(2000px at 100% 100%)',
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2
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

  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 3rem;
        background: #fff;
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
          & > span {
            z-index: 2;
          }
        `}
      >
        <span>Not Paramount</span>
        <AnimatePresence>
          {isOpen && (
            <motion.div
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
                background: #cbf3f2;
                z-index: 1;
                & + button {
                  z-index: 2;
                }
              `}
            >
              <motion.ul
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
                      onClick={() => toggleOpen()}
                      href={`#${item.toLowerCase()}`}
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
