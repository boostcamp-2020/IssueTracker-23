import React from 'react';
import styled from 'styled-components';
import Textarea from './Textarea.jsx';
import CharacterCounter from './CharacterCounter.jsx';
import ImageAttacher from './ImageAttacher.jsx';

const StyledDescriptionEditor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: max-content;
  height: max-content;
  margin: 10px;
  border: 1px solid #ccc;
`;

const DescriptionEditor = ({ hasCounter, hasAttacher, width, height }) => {
  return (
    <StyledDescriptionEditor>
      <Textarea hasAttacher={hasAttacher} width={width} height={height} />
      {hasCounter && <CharacterCounter hasAttacher={hasAttacher} />}
      {hasAttacher && <ImageAttacher />}
    </StyledDescriptionEditor>
  );
};

DescriptionEditor.defaultProps = {
  hasCounter: true,
  hasAttacher: true,
  width: 600,
  height: 200,
};

export default DescriptionEditor;
