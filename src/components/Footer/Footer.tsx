import { Container } from '../Container/Container';
import { Flex } from '../Flex/Flex';
import { Paragraph } from '../Paragraph/Paragraph';

export function Footer() {
  return (
    <Flex as="footer" alignItems="center" sx={{ height: '3rem' }}>
      <Container>
        <Paragraph sx={{ textAlign: 'center', m: 0 }}>
          © {new Date().getFullYear()}, Not Paramount
        </Paragraph>
      </Container>
    </Flex>
  );
}
