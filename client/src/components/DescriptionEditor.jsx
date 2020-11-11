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

const DescriptionEditor = ({ counter, attacher, width, height }) => {
  return (
    <StyledDescriptionEditor>
      <Textarea attacher={attacher} width={width} height={height} />
      {counter && <CharacterCounter attacher={attacher} />}
      {attacher && <ImageAttacher />}
    </StyledDescriptionEditor>
  );
};

DescriptionEditor.defaultProps = {
  counter: true,
  attacher: true,
  width: 600,
  height: 200,
};

export default DescriptionEditor;