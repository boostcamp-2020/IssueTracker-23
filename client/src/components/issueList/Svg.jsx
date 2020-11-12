import React from 'react';
import styled, { css } from 'styled-components';

const SvgContainer = styled.span`
  ${(props) =>
    css`
      margin: ${props.margin};
    `}
`;
const Svg = (props) => (
  <SvgContainer margin={props.margin}>
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      width={props.width}
      height={props.height}
      aria-hidden="true"
    >
      <path d={props.d}></path>
    </svg>
  </SvgContainer>
);

export default Svg;
