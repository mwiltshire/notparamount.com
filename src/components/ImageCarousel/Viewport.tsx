import React from 'react';
import { Box } from '../Box/Box';

interface ViewportProps {
  children: React.ReactNode;
}

export const Viewport = React.forwardRef<HTMLDivElement, ViewportProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      sx={{
        overflow: 'hidden',
        width: '100%',
        borderRadius: '1rem',
        '&.is-draggable': {
          cursor: 'grab'
        },
        '&.is-dragging': {
          cursor: 'grabbing'
        }
      }}
    >
      {children}
    </Box>
  )
);
