/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import { Link as ThemeLink } from 'theme-ui';
import { useScroll } from '../../hooks/useScroll';

interface LinkProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Link({ to, children, onClick }: LinkProps) {
  return (
    <NextLink
      href={to}
      onClick={onClick}
      sx={{ '&:visited': { color: 'inherit' } }}
    >
      {children}
    </NextLink>
  );
}

export function HashLink({
  to,
  children,
  onClick,
  variant = 'text'
}: LinkProps & { variant?: 'button' | 'buttonInverted' | 'text' }) {
  const scrollTo = useScroll({ offset: -48 });
  return (
    <ThemeLink
      href={to}
      variant={variant}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
        scrollTo(to);
      }}
    >
      {children}
    </ThemeLink>
  );
}

export function ExternalLink({ to, children, onClick }: LinkProps) {
  return (
    <ThemeLink href={to} onClick={onClick} target="_blank">
      {children}
    </ThemeLink>
  );
}
