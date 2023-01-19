import React from 'react';
import { Container as ThemeContainer } from 'theme-ui';

export function Container({
  children,
  px = [2, 3],
  ...rest
}: React.ComponentProps<typeof ThemeContainer>) {
  return (
    <ThemeContainer px={px} {...rest}>
      {children}
    </ThemeContainer>
  );
}
