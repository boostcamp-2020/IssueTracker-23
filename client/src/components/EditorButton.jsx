import React from 'react';
import styled, { css } from 'styled-components';

const StyledEditorButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0px -10px 10px 1px rgba(0, 0, 0, 0.08);
  ${({ color, bgColor, disabled }) => css`
    color: ${color};
    background-color: ${disabled || bgColor};
  `}
`;

const EditorButton = ({ text, color, bgColor, onClick, disabled }) => {
  return (
    <StyledEditorButton
      color={color}
      bgColor={bgColor}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledEditorButton>
  );
};

EditorButton.defaultProps = {
  text: '',
  color: 'black',
  bgColor: 'white',
};

export default EditorButton;
