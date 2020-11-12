import React from 'react';
import styled from 'styled-components';
import Textarea from './Textarea.jsx';
import CharacterCounter from './CharacterCounter.jsx';
import ImageAttacher from './ImageAttacher.jsx';

const StyledDescriptionEditor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: auto;
  height: auto;
  margin: auto 10px;
  border: 1px solid #ccc;
`;

const DescriptionEditor = ({
  hasCounter,
  hasAttacher,
  width,
  height,
  host,
}) => {
  return (
    <StyledDescriptionEditor>
      <Textarea hasAttacher={hasAttacher} width={width} height={height} />
      {hasCounter && <CharacterCounter hasAttacher={hasAttacher} />}
      {hasAttacher && <ImageAttacher host={host} />}
    </StyledDescriptionEditor>
  );
};

DescriptionEditor.defaultProps = {
  hasCounter: true,
  hasAttacher: true,
  width: 600,
  height: 100,
};

export default DescriptionEditor;
