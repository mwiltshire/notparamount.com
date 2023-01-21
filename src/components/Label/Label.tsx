import { Label as ThemeLabel } from 'theme-ui';

interface LabelProps extends React.ComponentProps<typeof ThemeLabel> {
  children: React.ReactNode;
}

export function Label({ children, ...rest }: LabelProps) {
  return <ThemeLabel {...rest}>{children}</ThemeLabel>;
}
