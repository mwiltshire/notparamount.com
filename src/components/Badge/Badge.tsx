import React from 'react';
import { Badge as ThemeBadge } from 'theme-ui';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

interface TagProps extends React.ComponentProps<typeof Box> {
  variant: 'error';
}

export function Badge({ children, variant }: TagProps) {
  return (
    <ThemeBadge
      as="span"
      p={1}
      variant={variant}
      sx={{ borderRadius: '0.3rem' }}
    >
      <Text variant="normal">{children}</Text>
    </ThemeBadge>
  );
}
