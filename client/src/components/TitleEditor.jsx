import React from 'react';
import styled from 'styled-components';

const StyledTitleEditor = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 20px);
  background-color: #f0f0f0;
`;

const TitleEditor = ({ placeholder }) => {
  return (
    <div>
      <StyledTitleEditor placeholder={placeholder} />
    </div>
  );
};

TitleEditor.defaultProps = {
  placeholder: 'Title',
};

export default TitleEditor;
