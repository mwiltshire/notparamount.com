import { Box } from 'theme-ui';

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <Box as="section" id={id}>
      {children}
    </Box>
  );
}
