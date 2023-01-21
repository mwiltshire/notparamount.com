/** @jsxImportSource theme-ui */
import { BLOCKS } from '@contentful/rich-text-types';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Section } from '../components/Section/Section';
import { SectionContentWrapper } from '../components/SectionContentWrapper/SectionContentWrapper';
import { SectionHeading } from '../components/SectionHeading/SectionHeading';
import { Stack } from '../components/Stack/Stack';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <Paragraph>{children}</Paragraph>
    )
  }
};

export function Audio() {
  return (
    <Section id="audio">
      <Container px={[3, 4]}>
        <SectionHeading>
          <Content id="audioHeading" />
        </SectionHeading>
      </Container>
      <SectionContentWrapper>
        <Container px={[3, 3, 3, 7]}>
          <Stack gap={3}>
            <Content id="audioContent" options={options} />
            <iframe
              title="Audio example playlist"
              src="https://open.spotify.com/embed/playlist/3ctuKfFMyOuAO8x86HJKiz?utm_source=generator&theme=0"
              width="100%"
              height="580"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </Stack>
        </Container>
      </SectionContentWrapper>
    </Section>
  );
}
