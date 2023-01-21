import { useState } from 'react';
import Image from 'next/image';
import { Box } from '../components/Box/Box';
import { Button } from '../components/Button/Button';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Flex } from '../components/Flex/Flex';
import { Heading } from '../components/Heading/Heading';
import { HashLink } from '../components/Link/Link';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Section } from '../components/Section/Section';
import { Stack } from '../components/Stack/Stack';
import { VideoModal } from '../components/VideoModal/VideoModal';

import studioImage from '../../public/images/studio-home.jpeg';

interface ContentWrapperProps {
  children: React.ReactNode;
}

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
        overflow: 'hidden',
        borderRadius: '1rem'
      }}
    >
      {children}
    </Flex>
  );
}

export function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <Section id="home">
      <ContentWrapper>
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="black"
          sx={{ flex: 1 }}
        >
          <Container px={[3, 4, 4]}>
            <Stack gap={4}>
              <Heading as="h1" sx={{ color: 'white', fontSize: [5, 5, 7] }}>
                <Content id="siteHeading" />
              </Heading>
              <Paragraph
                variant="bold"
                sx={{ color: 'white', fontSize: [2, 2, 2, 4] }}
              >
                <Content id="siteSubheading" />
              </Paragraph>
              <Stack direction="row">
                <HashLink to="#contact" variant="buttonInverted">
                  <Content id="contactCta" />
                </HashLink>
                <Button
                  variant="inverted"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Watch video
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Flex>
        <Box sx={{ position: 'relative', flex: 1 }}>
          <Image
            src={studioImage}
            alt="Chris at Not Paramount studio"
            draggable={false}
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            priority
            sizes="100vw, (min-width: 64em) 50vw"
          />
        </Box>
      </ContentWrapper>
      <VideoModal
        src="https://www.youtube.com/embed/1I4ir4_n998?modestbranding=1"
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen((s) => !s)}
      />
    </Section>
  );
}
