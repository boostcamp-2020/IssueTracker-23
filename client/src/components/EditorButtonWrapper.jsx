import React from 'react';
import styled from 'styled-components';
import EditorButton from './EditorButton.jsx';

const StyledEditorButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

const EditorButtonWrapper = ({ CancelButton, PostButton, postable }) => {
  const testButton = () => {
    console.log('buttonClick', postable);
  };
  return (
    <StyledEditorButtonWrapper>
      <CancelButton text="Cancel" onClick={testButton}></CancelButton>
      <PostButton
        text="Post"
        onClick={testButton}
        disabled={postable ? null : '#77aa77'}
        bgColor="green"
        color="white"
      ></PostButton>
    </StyledEditorButtonWrapper>
  );
};

EditorButtonWrapper.defaultProps = {
  CancelButton: EditorButton,
  PostButton: EditorButton,
};

export default EditorButtonWrapper;
