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

const DescriptionEditorNavigator = () => <WriteTab>Write</WriteTab>;

export default DescriptionEditorNavigator;
