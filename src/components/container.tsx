import React, { FC } from 'react';
import styled from '@emotion/styled';
import { BP_MIN_LG } from '../breakpoints';

type ContainerProps = {
  constrain?: boolean;
};

const ContainerDiv = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 100%;
  padding-left: 3.5vmin;
  padding-right: 3.5vmin;
  ${({ constrain }) =>
    constrain
      ? `
      ${BP_MIN_LG} {
        max-width: 720px;
      }`
      : ''}
`;

const Container: FC<ContainerProps> = ({ constrain = false, children }) => (
  <ContainerDiv constrain={constrain}>{children}</ContainerDiv>
);

export default Container;
