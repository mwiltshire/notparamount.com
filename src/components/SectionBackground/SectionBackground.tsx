import { Box } from '../Box/Box';

export function SectionBackground({
  children,
  ...rest
}: React.ComponentProps<typeof Box>) {
  return (
    <Box sx={{ borderRadius: '1rem' }} {...rest}>
      {children}
    </Box>
  );
}
