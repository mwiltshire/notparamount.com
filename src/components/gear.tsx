import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import { Accordion, AccordionSection } from './accordion';
import { Theme } from './layout';

const Gear = () => {
  const data = useStaticQuery(graphql`
    query {
      gear: contentfulNotParamountHome {
        gearHeading
        gearInstruments
        gearKeys
        gearMicrophones
        gearMonitoring
        gearPreamps
        gearRecordingSystem
        preampsGearList
        recordingSystemGearList
        monitoringGearList
        microphonesGearList
        keysGearList
        instrumentsGearList
        effectsGearList
        drumscymbalsGearList
        gearDrumsCymbals
        gearEffects
      }
    }
  `);

  const theme = useTheme<Theme>();

  const gearList = [
    {
      title: data.gear.gearRecordingSystem,
      items: data.gear.recordingSystemGearList
    },
    { title: data.gear.gearMonitoring, items: data.gear.monitoringGearList },
    { title: data.gear.gearPreamps, items: data.gear.preampsGearList },
    { title: data.gear.gearMicrophones, items: data.gear.microphonesGearList },
    {
      title: data.gear.gearDrumsCymbals,
      items: data.gear.drumscymbalsGearList
    },
    { title: data.gear.gearKeys, items: data.gear.keysGearList },
    { title: data.gear.gearInstruments, items: data.gear.instrumentsGearList },
    { title: data.gear.gearEffects, items: data.gear.effectsGearList }
  ];

  return (
    <Section
      id={data.gear.gearHeading.toLowerCase()}
      heading={data.gear.gearHeading}
      background="richBlack"
      m="0 0 2rem 0"
    >
      <Container constrain>
        <Accordion>
          {gearList.map(({ title, items }, index) => (
            <AccordionSection key={title} id={`gear-${index}`} title={title}>
              <ul
                css={css`
                  margin-left: 0;
                  color: ${theme.colors.white};
                  & li {
                    list-style: none;
                  }
                `}
              >
                {items.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </AccordionSection>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
};

export default Gear;
