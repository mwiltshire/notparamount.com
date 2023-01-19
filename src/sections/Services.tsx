/** @jsxImportSource theme-ui */
import { BLOCKS } from '@contentful/rich-text-types';
import { Box } from '../components/Box/Box';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Grid, Column } from '../components/Grid/Grid';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Section } from '../components/Section/Section';
import { SectionContentWrapper } from '../components/SectionContentWrapper/SectionContentWrapper';
import { SectionHeading } from '../components/SectionHeading/SectionHeading';
import { Stack } from '../components/Stack/Stack';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <Paragraph>{children}</Paragraph>
    ),
    [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => (
      <Heading as="h3" sx={{ fontSize: 5 }}>
        {children}
      </Heading>
    )
  }
};

export function Services() {
  return (
    <Section id="services">
      <Container px={[3, 4]}>
        <SectionHeading>
          <Content id="servicesHeading" />
        </SectionHeading>
      </Container>
      <SectionContentWrapper>
        <Container px={[3, 4]}>
          <Grid gap={4} columns={[1, 1, 2]}>
            <Stack gap={3}>
              <Content id="servicesDrumTracking" options={options} />
            </Stack>
            <Stack gap={3}>
              <Content id="servicesProduction" options={options} />
            </Stack>
            <Stack gap={3}>
              <Content id="servicesMixingMastering" options={options} />
            </Stack>
            <Stack gap={3}>
              <Content id="servicesAudioEditing" options={options} />
            </Stack>
          </Grid>
        </Container>
      </SectionContentWrapper>
    </Section>
  );
}
