import { MotionFlex } from '../Flex/Flex';

const backgroundVariants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.3
    }
  }
};

interface NavMenuProps {
  children: React.ReactNode;
}

export function NavMenu({ children }: NavMenuProps) {
  return (
    <MotionFlex
      key="navmenu"
      variants={backgroundVariants}
      initial="closed"
      animate="open"
      exit="closed"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        background: 'lightGray',
        zIndex: 1
      }}
    >
      {children}
    </MotionFlex>
  );
}
