import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import { Accordion, AccordionSection } from './accordion';
import { Theme } from './layout';

const gearList = [
  {
    title: 'Recording system',
    items: [
      'Apple iMac - 16GB RAM/SSD',
      'Ableton Live 11',
      'Universal Audio Apollo X8p',
      'Native Instruments Komplete 9',
      'Native Instruments Maschine 2',
      'UAD Plug-ins, Soundtoys 5 bundle, Audio Damage, Izotope',
      'Tascam Porta One'
    ]
  },
  { title: 'Monitoring', items: ['Focal Shape 65'] },
  {
    title: 'Preamps',
    items: ['Neve 1073', 'UA 610', 'Energy Technology VKP-1 valve']
  },
  {
    title: 'Microphones',
    items: [
      'AKG 414EB',
      'AKG D1000E',
      'AKG D130',
      'Electrovoice RE20',
      'Sennheiser MD441',
      'Sennheiser MD421',
      'SE Electronics RN17',
      'SE Electronics Z3300a (FET)',
      'Beyerdynamic M201 TG',
      'Shure SM57 (x2)',
      'Shure SM58 (x2)',
      'Sub Kick Speaker',
      'T-Bone RB500 ribbon',
      'Reslo ‘The Beeb’',
      'Beyerdynamic MPC50 Boundary Mic x2'
    ]
  },
  {
    title: 'Drums/cymbals',
    items: [
      '70’s Rogers Fullerton 9/72 (13”/16”/22”)',
      'Yamaha Maple Custom - bop sizes (12”/14”/18”)',
      '60’s Beverley (12”/14”/20”)',
      'Ludwig 400 (80s) 14” Snare',
      'Ludwig Black Beauty (90s) 14” Snare',
      'Ludwig 405 Ludalloy 13” Snare',
      'Rogers Dyna-Sonic 14” Snare',
      'Ajax Boosey & Hawkes 14” Snare',
      'Istanbul Agop & Vintage Avedis Cymbals (assorted)'
    ]
  },
  {
    title: 'Keyboards/Pianos/Synths',
    items: [
      'Roland Juno 6',
      'Sequential Prophet 6',
      'Korg Minilogue',
      'Eavestaff mini-piano',
      'Philips Philicorda Organ',
      'Suzuki Omnichord OM-27'
    ]
  },
  {
    title: 'Instruments',
    items: [
      'Fender Mustang Special (MIJ)',
      'Tanglewood Roadster Acoustic Guitar',
      'Chromaharp Autoharp',
      'Simon & Patrick 12 String Acoustic Guitar',
      'Bass Collection Jazz Bass',
      'Wurlitzer Swingin’ Rhythm Drum Machine'
    ]
  },
  {
    title: 'Effects',
    items: [
      'Marantz modded Cassette Tape Delay',
      'LEM EC20 Tape Effect Chamber',
      'Phaser guitar pedal',
      'Stereo tremolo guitar pedal'
    ]
  }
];

const Gear = () => {
  const theme = useTheme<Theme>();
  return (
    <Section id="gear" heading="Gear" background="richBlack" m="0 0 2rem 0">
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
                {items.map(item => (
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
