import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button as ThemeButton, Text } from 'theme-ui';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

interface ButtonProps extends React.ComponentProps<typeof ThemeButton> {
  loading?: boolean;
}

const loadingVariants = {
  hidden: {
    transition: { staggerChildren: 0.07 }
  },
  visible: { transition: { staggerChildren: 0.07, staggerDirection: -1 } }
};

const visibilityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const loadingDotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut'
} as const;

const Dot = React.forwardRef<HTMLSpanElement>((_, ref) => {
  return (
    <Box
      ref={ref}
      as="span"
      sx={{
        display: 'inline-block',
        background: 'currentColor',
        height: '10px',
        width: '10px',
        borderRadius: '50%'
      }}
    />
  );
});

interface DotsWrapperProps {
  children: React.ReactNode;
}

const DotsWrapper = React.forwardRef<HTMLSpanElement, DotsWrapperProps>(
  ({ children }, ref) => {
    return (
      <Stack
        ref={ref}
        as="span"
        gap="0.2rem"
        alignItems="center"
        justifyContent="center"
        direction="row"
        sx={{
          position: 'absolute',
          height: '100%',
          top: 0,
          left: 0,
          width: '100%',
          color: 'white'
        }}
      >
        {children}
      </Stack>
    );
  }
);

const MotionDot = motion(Dot);
const MotionText = motion(Text);
const MotionDotsWrapper = motion(DotsWrapper);

export function Button({
  children,
  loading = false,
  ...restProps
}: ButtonProps) {
  return (
    <ThemeButton {...restProps}>
      <Text sx={{ position: 'relative' }}>
        <MotionText
          variants={visibilityVariants}
          animate={loading ? 'hidden' : 'visible'}
        >
          {children}
        </MotionText>
        <AnimatePresence>
          {loading && (
            <MotionDotsWrapper
              key="loading"
              variants={loadingVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <MotionDot
                key="dot1"
                transition={loadingDotTransition}
                variants={visibilityVariants}
              />
              <MotionDot
                key="dot2"
                transition={loadingDotTransition}
                variants={visibilityVariants}
              />
              <MotionDot
                key="dot3"
                transition={loadingDotTransition}
                variants={visibilityVariants}
              />
            </MotionDotsWrapper>
          )}
        </AnimatePresence>
      </Text>
    </ThemeButton>
  );
}
