import { Box } from '../components/Box/Box';
import { Container } from '../components/Container/Container';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box as="main">
        <Container>{children}</Container>
      </Box>
      <Footer />
    </>
  );
}
