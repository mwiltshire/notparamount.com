import { Heading } from '../Heading/Heading';

export function SectionHeading({
  children,
  sx,
  ...rest
}: React.ComponentProps<typeof Heading>) {
  return (
    <Heading
      as="h2"
      sx={{
        fontSize: 2,
        textTransform: 'uppercase',
        py: 4,
        letterSpacing: '0.1rem',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Heading>
  );
}
