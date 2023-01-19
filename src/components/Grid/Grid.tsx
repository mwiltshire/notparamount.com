import { Box } from '../Box/Box';

export { Grid } from 'theme-ui';

interface ColumnProps {
  children: React.ReactNode;
  gridColumn: string | string[];
}

export function Column({ children, gridColumn }: ColumnProps) {
  return <Box sx={{ gridColumn }}>{children}</Box>;
}
