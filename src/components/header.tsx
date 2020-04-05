import React from 'react';
import { css } from '@emotion/core';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import NavButton from './nav-button';

const navItems = ['Services', 'Gear', 'About', 'Contact'];

const variants = {
  open: {
    clipPath: 'circle(2000px at 100% 100%)',
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2
    }
  },
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

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
              variants={variants}
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
              <ul>
                {navItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <NavButton isClicked={isOpen} onClick={toggleOpen} />
      </nav>
    </header>
  );
};

export default Header;
