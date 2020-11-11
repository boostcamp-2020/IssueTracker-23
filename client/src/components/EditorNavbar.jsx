import React from 'react';
import styled from 'styled-components';

const WriteTab = styled.div`
  position: relative;
  z-index: 1;
  top: 1px;
  left: 10px;
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1px solid #ccc;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

const StyledEditorNavbar = styled.div`
  border-bottom: 1px solid #ccc;
`;

const EditorNavbar = () => (
  <StyledEditorNavbar>
    <WriteTab>Write</WriteTab>
  </StyledEditorNavbar>
);

export default EditorNavbar;
