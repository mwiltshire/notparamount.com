import { MotionBox } from '../Box/Box';

const navListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

interface NavListProps {
  children: React.ReactNode;
}

export function NavList({ children }: NavListProps) {
  return (
    <MotionBox
      key="navList"
      as="ul"
      variants={navListVariants}
      sx={{ margin: 0, listStyle: 'none', p: 0 }}
    >
      {children}
    </MotionBox>
  );
}
