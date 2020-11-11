import React from 'react';
import styled, { css } from 'styled-components';
import DescriptionEditor from './DescriptionEditor.jsx';
import DescriptionEditorNavigator from './DescriptionEditorNavigator.jsx';
import EditorButtonWrapper from './EditorButtonWrapper.jsx';

const DescriptionEditorWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: max-content;
  height: max-content;

  ${({ padding }) => css`
    padding: ${padding}px;
  `}
`;

const EditorWrapper = ({ width, height, padding }) => {
  return (
    <>
      <DescriptionEditorNavigator />
      <DescriptionEditorWrapper padding={padding}>
        <DescriptionEditor
          width={width - 2 * padding}
          height={height - 2 * padding}
        />
        <EditorButtonWrapper />
      </DescriptionEditorWrapper>
    </>
  );
};

EditorWrapper.defaultProps = {
  width: 800,
  height: 200,
  padding: 10,
};

export default EditorWrapper;
