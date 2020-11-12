import React from 'react';
import styled, { css } from 'styled-components';

const StyledCharacterCounter = styled.p`
  display: none;
  position: absolute;
  right: 10px;
  ${({ hasAttacher }) =>
    css`
      bottom: ${hasAttacher ? 20 : -10}px;
    `}
  color: #555;
`;

const CharacterCounter = ({ hasAttacher }) => {
  return (
    <>
      <StyledCharacterCounter hasAttacher={hasAttacher}>
        0 characters
      </StyledCharacterCounter>
      <div></div>
    </>
  );
};

CharacterCounter.defaultProps = {
  hasAttacher: true,
};

export default CharacterCounter;
