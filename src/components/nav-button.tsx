import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import VisuallyHidden from './visually-hidden';

type NavButtonProps = {
  isClicked: boolean;
  onClick: () => void;
};

type LineProps = {
  isClicked: boolean;
};

const TOP_LINE_DEFAULT_WIDTH = '1.7rem';
const BOTTOM_LINE_DEFAULT_WIDTH = '1.3rem';
const LINE_ACTIVE_WIDTH = '1.8rem';

const TopLine = styled(motion.span)<LineProps>`
  display: flex;
  align-self: flex-end;
  position: relative;
  height: 4px;
  background: currentColor;
  border-radius: 9999em;
  top: ${({ isClicked }) => (isClicked ? '3px' : '-3px')};
`;

const BottomLine = styled(motion.span)<LineProps>`
  display: flex;
  align-self: flex-end;
  position: relative;
  height: 4px;
  background: currentColor;
  border-radius: 9999em;
  top: ${({ isClicked }) => (isClicked ? '-1px' : '3px')};
`;

const Button = styled(motion.button)`
  background: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  height: 2rem;
  padding: 3px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const NavButton: FC<NavButtonProps> = ({ isClicked, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Button
      aria-label={isClicked ? 'close navigation menu' : 'open navigation menu'}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <VisuallyHidden>Menu</VisuallyHidden>
      <TopLine
        animate={{
          transform: isClicked ? 'rotate(45deg)' : 'rotate(0deg)',
          width:
            isHover || isClicked ? LINE_ACTIVE_WIDTH : TOP_LINE_DEFAULT_WIDTH
        }}
        isClicked={isClicked}
      />
      <BottomLine
        animate={{
          transform: isClicked ? 'rotate(-45deg)' : 'rotate(0deg)',
          width:
            isHover || isClicked ? LINE_ACTIVE_WIDTH : BOTTOM_LINE_DEFAULT_WIDTH
        }}
        isClicked={isClicked}
      />
    </Button>
  );
};

export default NavButton;
