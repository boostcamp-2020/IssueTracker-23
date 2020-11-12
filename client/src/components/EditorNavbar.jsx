import React from 'react';
import styled from 'styled-components';

const WriteTab = styled.button`
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
  margin: 10px 0 20px 0;
`;

const EditorNavbar = (props) => {
  // props 받아서 유저==author인지 아닌지에 따라 색 넣기
  return (
    <StyledEditorNavbar>
      <WriteTab>Write</WriteTab>
    </StyledEditorNavbar>
  );
};

export default EditorNavbar;
