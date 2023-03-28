/** @jsxImportSource theme-ui */
import { Accordion, AccordionItem } from '../components/Accordion/Accordion';
import { Container } from '../components/Container/Container';
import { Content } from '../components/Content/Content';
import { Section } from '../components/Section/Section';
import { SectionBackground } from '../components/SectionBackground/SectionBackground';
import { SectionContentWrapper } from '../components/SectionContentWrapper/SectionContentWrapper';
import { SectionHeading } from '../components/SectionHeading/SectionHeading';
import { Stack } from '../components/Stack/Stack';
import { Text } from '../components/Text/Text';
import { useContent } from '../hooks/useContent';

export function Gear() {
  const { get } = useContent();

  const gearList = [
    {
      title: 'gearRecordingSystem',
      items: 'recordingSystemGearList'
    },
    { title: 'gearMonitoring', items: 'monitoringGearList' },
    { title: 'gearPreamps', items: 'preampsGearList' },
    { title: 'gearMicrophones', items: 'microphonesGearList' },
    {
      title: 'gearDrumsCymbals',
      items: 'drumscymbalsGearList'
    },
    { title: 'gearKeys', items: 'keysGearList' },
    { title: 'gearInstruments', items: 'instrumentsGearList' },
    { title: 'gearEffects', items: 'effectsGearList' }
  ] as const;

  return (
    <Section id="gear">
      <SectionBackground bg="black">
        <Container px={[3, 4]}>
          <SectionHeading sx={{ color: 'white' }}>
            <Content id="gearHeading" />
          </SectionHeading>
        </Container>
        <SectionContentWrapper>
          <Container px={[3, 3, 3, 7]}>
            <Accordion>
              {gearList.map(({ title, items }) => (
                <AccordionItem key={title} title={get(title)} id={title}>
                  <Stack
                    as="ul"
                    sx={{ margin: 0, p: 0, color: 'white', listStyle: 'none' }}
                  >
                    {get(items).map((item) => (
                      <li key={item}>
                        <Text>{item}</Text>
                      </li>
                    ))}
                  </Stack>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </SectionContentWrapper>
      </SectionBackground>
    </Section>
  );
}
