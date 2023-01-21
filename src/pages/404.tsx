import Image from 'next/image';
import { Box } from '../components/Box/Box';
import { Container } from '../components/Container/Container';
import { Flex } from '../components/Flex/Flex';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Section } from '../components/Section/Section';
import { Stack } from '../components/Stack/Stack';
import { Link } from '../components/Link/Link';
import { NavBar } from '../components/Nav/NavBar';
import { Logo } from '../components/Logo/Logo';

import lupin from '../../public/images/lupin.jpeg';

interface ContentWrapperProps {
  children: React.ReactNode;
}

// TODO: Fix how this is repeated from home page...
function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <Flex
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row'
      ]}
      sx={{
        height: 'calc((100vh - 3rem) - 15px)',
        mt: '3rem',
        overflow: 'hidden'
      }}
    >
      {children}
    </Flex>
  );
}

function Header() {
  return (
    <Box
      as="header"
      bg="white"
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '3rem',
        zIndex: 2
      }}
    >
      <NavBar>
        <Box sx={{ zIndex: 2, height: '1.5rem' }}>
          <Link to="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </Box>
      </NavBar>
    </Box>
  );
}

export default function NotFound() {
  return (
    <Container px={[2, 3]}>
      <Header />
      <Section id="404">
        <ContentWrapper>
          <Flex alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
            <Container px={[3, 4]}>
              <Stack gap={4}>
                <Heading as="h1">404</Heading>
                <Paragraph>
                  Nope. This is definitely not what you were looking for.
                </Paragraph>
                <Paragraph>
                  Here’s the deal. You can hang around here with Not Paramount’s
                  resident kitty, Lupin, for a while, or you can head back to
                  the <Link to="/">home page</Link>.
                </Paragraph>
                <Paragraph>
                  I think he might be fine here by himself anyway.
                </Paragraph>
              </Stack>
            </Container>
          </Flex>
          <Box sx={{ position: 'relative', flex: 1 }}>
            <Image
              src={lupin}
              alt="Lupin the cat"
              draggable={false}
              fill
              style={{ objectFit: 'cover', borderRadius: '1rem' }}
              placeholder="blur"
              priority
              sizes="100vw, (min-width: 64em) 50vw"
            />
          </Box>
        </ContentWrapper>
      </Section>
    </Container>
  );
}
