import React from 'react';
import styled from 'styled-components';
import DescriptionEditor from './DescriptionEditor.jsx';
import EditorNavbar from './EditorNavbar.jsx';
import EditorButtonWrapper from './EditorButtonWrapper.jsx';

const StyledEditorWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: max-content;
`;

const EditorWrapper = ({ width, height, padding }) => {
  return (
    <StyledEditorWrapper width={width}>
      <EditorNavbar />
      <DescriptionEditor
        width={width - 2 * padding}
        height={height - 2 * padding}
      />
      <EditorButtonWrapper />
    </StyledEditorWrapper>
  );
};

EditorWrapper.defaultProps = {
  width: 600,
  height: 200,
  padding: 10,
};

export default EditorWrapper;
