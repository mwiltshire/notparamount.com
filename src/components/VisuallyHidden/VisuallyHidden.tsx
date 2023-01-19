import { Box } from '../Box/Box';

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return (
    <Box
      as="span"
      sx={{
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px'
      }}
    >
      {children}
    </Box>
  );
}
