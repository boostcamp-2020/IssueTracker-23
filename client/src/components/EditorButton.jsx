import React from 'react';
import styled, { css } from 'styled-components';

const StyledEditorButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0px -10px 10px 1px rgba(0, 0, 0, 0.1);
  ${({ color, backColor }) => css`
    color: ${color};
    background-color: ${backColor};
  `}
`;

const EditorButton = ({ text, color, backColor }) => {
  return (
    <StyledEditorButton color={color} backColor={backColor}>
      {text}
    </StyledEditorButton>
  );
};

EditorButton.defaultProps = {
  text: '',
  color: 'black',
  backColor: 'white',
};

export default EditorButton;
