import { Flex } from '../Flex/Flex';

interface NavBarProps {
  children: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      sx={{ margin: '0 15px', height: '100%' }}
    >
      {children}
    </Flex>
  );
}
