import { BLOCKS } from '@contentful/rich-text-types';
import { Box } from '../components/Box/Box';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Flex } from '../components/Flex/Flex';
import { Grid } from '../components/Grid/Grid';
import { Heading } from '../components/Heading/Heading';
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Section } from '../components/Section/Section';
import { SectionBackground } from '../components/SectionBackground/SectionBackground';
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

export function About() {
  return (
    <Section id="about">
      <SectionBackground bg="lightGray">
        <Container px={[3, 4]}>
          <SectionHeading>
            <Content id="aboutHeading" />
          </SectionHeading>
        </Container>
        <SectionContentWrapper>
          <Container px={[3, 4]}>
            <Grid columns={['1fr', '1fr', '1fr', '1fr 2fr']} gap={[4, 4, 6]}>
              <Flex flexDirection="column" justifyContent="center">
                <Stack gap={3}>
                  <Content id="aboutContent" options={options} />
                </Stack>
              </Flex>
              <Box>
                <ImageCarousel />
              </Box>
            </Grid>
          </Container>
        </SectionContentWrapper>
      </SectionBackground>
    </Section>
  );
}
