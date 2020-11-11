import React from 'react';
import styled from 'styled-components';
import EditorButton from './EditorButton.jsx';

const StyledEditorButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

const EditorButtonWrapper = ({ Buttons }) => {
  return <StyledEditorButtonWrapper>{Buttons}</StyledEditorButtonWrapper>;
};

EditorButtonWrapper.defaultProps = {
  Buttons: [
    <EditorButton text="test1" backColor="white" color="black" key={1} />,
    <EditorButton text="test2" backColor="green" color="white" key={2} />,
  ],
};

export default EditorButtonWrapper;
