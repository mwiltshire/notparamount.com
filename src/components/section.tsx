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
};

const Section: FC<SectionProps> = ({
  id,
  heading,
  background = 'backgroundLight',
  children
}) => {
  const theme = useTheme<Theme>();

  return (
    <section
      id={id}
      css={css`
        ${background ? `background: ${theme.colors[background]}` : ''};
        ${background === 'backgroundDark' ? 'color: #fff' : ''}
      `}
    >
      <Container>
        <SectionHeader>{heading}</SectionHeader>
      </Container>
      <div
        css={css`
          padding: 4rem 0;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
