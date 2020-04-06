import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Container from './container';
import SectionHeader from './section-header';
import { Accordion, AccordionSection } from './accordion';

const gearList = [
  {
    title: 'Recording system',
    items: [
      'Apple iMac - 8GB Ram - 1TB SSD',
      'Ableton Live 10',
      'Universal Audio Apollo X8p',
      'Native Instruments Komplete 9',
      'Native Instruments Maschine 2',
      'UAD Plug-ins, Soundtoys 5 bundle, Audio Damage, Izotope',
      'Tascam Portastudio 424 mkII'
    ]
  },
  { title: 'Monitoring', items: ['Genelec 8030b'] },
  { title: 'Preamps', items: ['Neve 1073', 'UA 610'] },
  {
    title: 'Microphones',
    items: [
      'Electrovoice RE20',
      'Sennheiser MD441',
      'Coles 4038 (pair)',
      'SE Electronics RN17',
      'SE Electronics Z3300a (FET)',
      'Beyerdynamic M201 TG',
      'Shure SM57 (x2)',
      'Shure SM58 (x2)',
      'Sub Kick Speaker',
      'T-Bone RB500 ribbon'
    ]
  },
  {
    title: 'Drums/cymbals',
    items: [
      'Ludwig Super Classic 1964 (13”/16”/22”)',
      'WFL / Ludwig & Ludwig 1952 (13”/16”/20”)',
      'Yamaha Maple Custom - bop sizes (12”/14”/18”)',
      'Ludwig 400 (80s) 14” Snare',
      'Ludwig Black Beauty (90s) 14” Snare',
      'Ludwig 405 Ludalloy 13” Snare',
      'Ludwig Vistalite 14” Snare',
      'Istanbul Agop & Vintage Avedis Cymbals (assorted)'
    ]
  },
  {
    title: 'Keyboards/Pianos/Synths',
    items: [
      'Roland Juno 6',
      'Teenage Engineering OP1',
      'Korg Delta',
      'Rhodes mkII',
      'Eavestaff mini-piano',
      'Philips Philicorda Organ',
      'Suzuki Omnichord OM-27'
    ]
  },
  {
    title: 'Instruments',
    items: [
      'Martin Acoustic Guitar',
      'Fender Stratocaster Electric Guitar (Mexican)',
      'Simon & Patrick 12 String Acoustic Guitar',
      'Bass Collection Jazz Bass',
      'Wurlitzer Swingin’ Rhythm Drum Machine'
    ]
  },
  {
    title: 'Effects',
    items: [
      'Marantz modded Cassette Tape Delay',
      'LEM EC20 Tape Effect Chamber'
    ]
  }
];

const Gear = () => {
  const theme = useTheme<any>();

  return (
    <section id="gear">
      <div
        css={css`
          background: ${theme.backgroundDark};
        `}
      >
        <Container>
          <SectionHeader light>Gear</SectionHeader>
        </Container>
        <Container constrain>
          <div
            css={css`
              padding: 4rem 0;
            `}
          >
            <Accordion>
              {gearList.map(({ title, items }, index) => (
                <AccordionSection
                  key={title}
                  id={`gear-${index}`}
                  title={title}
                >
                  <ul
                    css={css`
                      margin-left: 0;
                    `}
                  >
                    {items.map(item => (
                      <li
                        css={css`
                          list-style: none;
                          color: #fff;
                        `}
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
              ))}
            </Accordion>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Gear;
