import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';
import { Box } from '../Box/Box';
import { NavBar } from '../Nav/NavBar';
import { NavItem } from '../Nav/NavItem';
import { NavList } from '../Nav/NavList';
import { NavMenu } from '../Nav/NavMenu';
import { NavButton } from '../Nav/NavButton';
import { useScroll } from '../../hooks/useScroll';
import { useContent } from '../../hooks/useContent';

export function Header() {
  const { get } = useContent();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const scrollTo = useScroll({ offset: -48, delay: 400 });

  const navItems = [
    // TODO: Add this in once Next migration is done.
    // 'Drum Tracking',
    'servicesHeading',
    'audioHeading',
    'aboutHeading',
    'gearHeading',
    'contactHeading'
  ] as const;

  return (
    <Box
      as="header"
      bg="white"
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '3rem',
        zIndex: 2
      }}
    >
      <NavBar>
        <Box sx={{ zIndex: 2, height: '1.5rem' }}>
          <Link to="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </Box>
        <AnimatePresence>
          {isNavMenuOpen && (
            <NavMenu>
              <NavList>
                {navItems.map((item) => {
                  const content = get(item);
                  const hash = `#${content.toLowerCase().replaceAll(' ', '-')}`;
                  return (
                    <NavItem
                      key={item}
                      onClick={(e) => {
                        if (window.location.pathname === '/') {
                          e.preventDefault();
                          setIsNavMenuOpen(false);
                          scrollTo(hash);
                        }
                      }}
                      href={`/${hash}`}
                    >
                      {content}
                    </NavItem>
                  );
                })}
              </NavList>
            </NavMenu>
          )}
        </AnimatePresence>
        <NavButton
          isNavMenuOpen={isNavMenuOpen}
          onClick={() => setIsNavMenuOpen((s) => !s)}
        />
      </NavBar>
    </Box>
  );
}
