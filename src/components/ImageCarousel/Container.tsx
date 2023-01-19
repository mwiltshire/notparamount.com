import { Flex } from '../Flex/Flex';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Flex
      sx={{
        userSelect: 'none',
        ml: '-1rem',
        '-webkit-touch-callout': 'none',
        '-khtml-user-select': 'none',
        '-webkit-tap-highlight-color': 'transparent'
      }}
    >
      {children}
    </Flex>
  );
}
