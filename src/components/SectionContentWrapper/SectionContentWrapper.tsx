import { Box } from '../Box/Box';

export function SectionContentWrapper({
  children,
  ...rest
}: React.ComponentProps<typeof Box>) {
  return (
    <Box sx={{ pb: 5 }} {...rest}>
      {children}
    </Box>
  );
}
