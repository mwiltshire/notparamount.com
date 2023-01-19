import { Box } from '../Box/Box';

interface SlideProps {
  children: React.ReactNode;
}

export function Slide({ children }: SlideProps) {
  return (
    <Box sx={{ position: 'relative', minWidth: '100%', pl: '1rem' }}>
      <Box sx={{ position: 'relative', overflow: 'hidden', height: '65vmin' }}>
        {children}
      </Box>
    </Box>
  );
}
