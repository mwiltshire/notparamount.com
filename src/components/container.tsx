import React, { FC } from 'react';
import { css } from '@emotion/core';
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
  ${BP_MIN_LG} {
    padding-left: 30px;
    padding-right: 30px;
  }
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
