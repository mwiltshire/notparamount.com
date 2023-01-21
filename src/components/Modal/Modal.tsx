import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { Box, MotionBox } from '../Box/Box';

const overlayVariants = {
  open: {
    opacity: 0.8
  },
  closed: {
    opacity: 0
  }
};

const containerVariants = {
  open: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    translateY: 50
  }
};

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface OverlayProps {
  onClick: () => void;
}

function Overlay({ onClick }: OverlayProps) {
  return (
    <MotionBox
      onClick={onClick}
      variants={overlayVariants}
      initial="closed"
      animate="open"
      exit="closed"
      sx={{
        position: 'fixed',
        top: 0,
        height: '100vh',
        width: '100vw',
        background: 'text',
        zIndex: 5
      }}
    />
  );
}

function ModalContainer({
  children,
  onClose
}: Pick<ModalProps, 'children' | 'onClose'>) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        zIndex: 4
      }}
    >
      <Overlay onClick={onClose} />
      <MotionBox
        role="dialog"
        aria-modal
        variants={containerVariants}
        initial="closed"
        animate="open"
        exit="closed"
        sx={{
          zIndex: 6
        }}
      >
        {children}
      </MotionBox>
    </Box>
  );
}

function isBrowserEnvironment() {
  return typeof window !== 'undefined' && window.document;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isBrowserEnvironment()) {
      if (isOpen) {
        document.body.style.height = '100vh';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
      } else {
        const scrollY = document.body.style.top;
        document.body.style.height = 'auto';
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  if (!isBrowserEnvironment()) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && <ModalContainer onClose={onClose}>{children}</ModalContainer>}
    </AnimatePresence>,
    document.body
  );
}
