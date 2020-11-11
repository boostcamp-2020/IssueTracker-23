import React from 'react';
import styled, { css } from 'styled-components';

const StyledTextarea = styled.textarea`
  border: none;
  padding: 10px;
  background-color: #f7f7f7;
  resize: vertical;
  ${({ attacher, width, height }) => css`
    width: ${width}px;
    height: ${attacher ? height - 30 : height}px;
  `}
  min-height: 100px;
`;

const Textarea = ({ placeholder, attacher, width, height }) => (
  <StyledTextarea
    placeholder={placeholder}
    attacher={attacher}
    width={width}
    height={height}
  />
);

Textarea.defaultProps = {
  placeholder: 'Leave a comment',
  attacher: true,
  width: 600,
  height: 200,
};

export default Textarea;
