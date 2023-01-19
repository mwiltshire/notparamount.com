import { Button } from '../components/Button/Button';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Heading } from '../components/Heading/Heading';
import { HashLink } from '../components/Link/Link';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Section } from '../components/Section/Section';
import { SectionBackground } from '../components/SectionBackground/SectionBackground';
import { SectionContentWrapper } from '../components/SectionContentWrapper/SectionContentWrapper';
import { SectionHeading } from '../components/SectionHeading/SectionHeading';
import { Stack } from '../components/Stack/Stack';

export function DrumTracking() {
  return (
    <Section id="drum-tracking">
      <SectionBackground>
        <Container px={[3, 4]}>
          <SectionHeading>Drum Tracking</SectionHeading>
        </Container>
        <SectionContentWrapper>
          <Container px={[3, 3, 3, 7]}>
            <Stack gap={3}>
              <Heading as="h3" variant="xlarge">
                Add professionally recorded drums to your tracks
              </Heading>
              <Paragraph>
                With Not Paramount studio, you get professional, studio-quality
                drums on your tracks without having to worry about limited
                studio time or hiring engineers and session players. Not
                Paramount will handle everything: recording, engineering and
                post-production. You can be as involved in the whole process as
                you want - you&apos;re free to provide preferences for mic
                selection or consult with the studio on what might sound best
                for your recordings.{' '}
              </Paragraph>
              <Heading as="h4">Here&apos;s how it works</Heading>
              <Paragraph>
                You send me both a version of your track without any drums, and
                a version with demo drums (if you have it). I&apos;ll provide
                one comped drum take. I typically provide 5 individual drum
                stems but can provide extra stems if required (such as close
                mics on toms, hi-hats, room mics or even heavily processed
                character stems). I&apos;ll need the BPM of the track and what
                sample rate/bit depth you&apos;d like me to record at. I include
                2 revisions in my initial quote. I can use any combination of
                drums and microphones (see gear list below) to get the right
                sound for your music at a competitive price-point.
              </Paragraph>
              <Stack direction="row" alignItems="center">
                <HashLink to="#contact">Contact</HashLink>
                <HashLink to="#services">More services</HashLink>
              </Stack>
            </Stack>
          </Container>
        </SectionContentWrapper>
      </SectionBackground>
    </Section>
  );
}
