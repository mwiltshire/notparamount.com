/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { MotionFlex } from '../Flex/Flex';

const topLineVariants = {
  default: {
    width: '1.7rem',
    transform: 'rotate(0deg)'
  },
  hover: {
    width: '1.8rem'
  },
  open: {
    transform: 'rotate(45deg)',
    width: '1.8rem'
  }
};

const bottomLineVariants = {
  default: {
    width: '1.3rem',
    transform: 'rotate(0deg)'
  },
  hover: {
    width: '1.8rem'
  },
  open: {
    transform: 'rotate(-45deg)',
    width: '1.8rem'
  }
};

interface ButtonProps {
  children: React.ReactNode;
  isNavMenuOpen: boolean;
  onClick: () => void;
}

function Button({ children, isNavMenuOpen, onClick }: ButtonProps) {
  return (
    <MotionFlex
      as="button"
      initial="default"
      animate={isNavMenuOpen ? 'open' : 'default'}
      whileHover={isNavMenuOpen ? undefined : 'hover'}
      flexDirection="column"
      justifyContent="center"
      onClick={onClick}
      sx={{
        background: 'transparent',
        border: 'none',
        height: '2rem',
        padding: '3px 0',
        cursor: 'pointer',
        zIndex: 1,
        '&:focus': {
          outline: 'none'
        }
      }}
    >
      {children}
    </MotionFlex>
  );
}

interface LineProps {
  top: string;
}

const Line = React.forwardRef<HTMLSpanElement, LineProps>(({ top }, ref) => {
  return (
    <motion.span
      ref={ref}
      sx={{
        position: 'relative',
        alignSelf: 'flex-end',
        height: '4px',
        bg: 'black',
        borderRadius: '9999em',
        top
      }}
    />
  );
});

const MotionLine = motion(Line);

interface NavButtonProps {
  isNavMenuOpen: boolean;
  onClick: () => void;
}

export function NavButton({ isNavMenuOpen, onClick }: NavButtonProps) {
  return (
    <Button
      aria-label={
        isNavMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
      }
      isNavMenuOpen={isNavMenuOpen}
      onClick={onClick}
    >
      <VisuallyHidden>Menu</VisuallyHidden>
      <MotionLine
        variants={topLineVariants}
        top={isNavMenuOpen ? '3px' : '-3px'}
      />
      <MotionLine
        variants={bottomLineVariants}
        top={isNavMenuOpen ? '-1px' : '3px'}
      />
    </Button>
  );
}

export default NavButton;
