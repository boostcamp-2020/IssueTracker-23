import React from 'react';
import styled from 'styled-components';
import EditorButton from './EditorButton.jsx';

const StyledEditorButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

const EditorButtonWrapper = ({
  onClick,
  CancelButton,
  PostButton,
  postable,
}) => {
  const clickHandler = (e) => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.innerText === 'submit') {
        onClick({ isEdited: true });
      } else onClick({ isEdited: false });
    }
  };
  return (
    <StyledEditorButtonWrapper>
      <CancelButton text="Cancel" onClick={clickHandler}></CancelButton>
      <PostButton
        text="Post"
        onClick={clickHandler}
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
