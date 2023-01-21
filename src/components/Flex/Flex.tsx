import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '../Box/Box';

type DirectionValues = 'column' | 'row' | 'column-reverse' | 'row-reverse';
type AlignValues = 'flex-start' | 'center' | 'flex-end';
type JustifyValues =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-around'
  | 'space-between';

interface FlexProps extends React.ComponentProps<typeof Box> {
  flexDirection?: DirectionValues | Array<DirectionValues>;
  alignItems?: AlignValues | Array<AlignValues>;
  justifyContent?: JustifyValues | Array<JustifyValues>;
  gap?: string | number;
}

export const Flex = React.forwardRef<HTMLElement, FlexProps>(
  (
    { children, sx, gap, flexDirection, alignItems, justifyContent, ...rest },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        sx={{
          ...sx,
          display: 'flex',
          flexDirection,
          alignItems,
          justifyContent,
          gap
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

export const MotionFlex = motion(Flex);
