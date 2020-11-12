import React from 'react';
import styled from 'styled-components';
import EditorButton from './EditorButton.jsx';

const StyledEditorButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

const EditorButtonWrapper = (props) => {
  const clickHandler = (e) => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.innerText === 'submit') {
        props.onClick({ isEdited: true });
      } else props.onClick({ isEdited: false });
    }
  };
  return (
    <StyledEditorButtonWrapper onClick={clickHandler}>
      {props.Buttons}
    </StyledEditorButtonWrapper>
  );
};

EditorButtonWrapper.defaultProps = {
  Buttons: [
    <EditorButton text="cancel" backColor="white" color="black" key={1} />,
    <EditorButton text="submit" backColor="green" color="white" key={2} />,
  ],
};

export default EditorButtonWrapper;
