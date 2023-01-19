/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from '../Flex/Flex';

interface StackProps
  extends Omit<React.ComponentProps<typeof Flex>, 'flexDirection'> {
  children: React.ReactNode;
  direction?: 'column' | 'row' | Array<'column' | 'row'>;
}

export const Stack = React.forwardRef<HTMLSpanElement, StackProps>(
  ({ children, sx, gap = 2, direction = 'column', ...rest }, ref) => {
    return (
      <Flex ref={ref} sx={{ ...sx, gap }} flexDirection={direction} {...rest}>
        {children}
      </Flex>
    );
  }
);
