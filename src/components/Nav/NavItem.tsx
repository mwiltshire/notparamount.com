import { Link } from 'theme-ui';
import { MotionBox } from '../Box/Box';

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

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  onClick: (e: React.SyntheticEvent<HTMLAnchorElement>) => void;
}

export function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <MotionBox
      as="li"
      variants={navItemVariants}
      sx={{ fontSize: 6, fontWeight: 'bold' }}
    >
      <Link
        href={href}
        onClick={onClick}
        sx={{
          position: 'relative',
          textDecoration: 'none',
          color: 'inherit',
          '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: '-3px',
            width: '100%',
            height: '6px',
            background: 'currentColor'
          },
          '&:visited': {
            color: 'inherit'
          }
        }}
      >
        {children}
      </Link>
    </MotionBox>
  );
}
