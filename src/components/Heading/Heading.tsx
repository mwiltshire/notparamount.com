import { Heading as ThemeHeading } from 'theme-ui';

interface HeadingProps extends React.ComponentProps<typeof ThemeHeading> {
  fontSize?: number | number[];
}

export function Heading({ children, fontSize, ...rest }: HeadingProps) {
  return (
    <ThemeHeading sx={{ fontSize }} {...rest}>
      {children}
    </ThemeHeading>
  );
}
