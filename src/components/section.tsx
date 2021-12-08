import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Container from './container';
import SectionHeader from './section-header';
import { Theme } from './layout';

type SectionProps = {
  id: string;
  heading: string;
  background?: keyof Theme['colors'];
  m?: string
};

const Section: FC<SectionProps> = ({ id, heading, background, m, children }) => {
  const theme = useTheme<Theme>();

  return (
    <section
      id={id}
      css={css`
        border-radius: 1rem;
        ${background && `background: ${theme.colors[background]}`};
        ${background === 'richBlack' ? `color: ${theme.colors.white};` : ''}
        ${m ? `margin: ${m};` : ''}
      `}
    >
      <Container>
        <SectionHeader>{heading}</SectionHeader>
      </Container>
      <div
        css={css`
          padding: 6vmin 0 8vmin 0;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
