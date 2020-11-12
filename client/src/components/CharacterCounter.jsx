import React from 'react';
import styled, { css } from 'styled-components';

const StyledCharacterCounter = styled.p`
  position: absolute;
  right: 10px;
  ${({ attacher }) =>
    css`
      bottom: ${attacher ? 20 : -10}px;
    `}
  color: #555;
`;

const CharacterCounter = ({ attacher }) => {
  return (
    <>
      <StyledCharacterCounter attacher={attacher}>
        0 characters
      </StyledCharacterCounter>
      <div></div>
    </>
  );
};

CharacterCounter.defaultProps = {
  attacher: true,
};

export default CharacterCounter;
