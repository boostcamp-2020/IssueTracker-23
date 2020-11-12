import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

const StyledTitleEditor = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 20px);
  background-color: #f0f0f0;
`;

const TitleEditor = ({ placeholder, setPostable }) => {
  useEffect(() => {
    setPostable(() => false);
  }, [setPostable]);
  const onChange = useCallback(
    (e) => {
      if (e.currentTarget.value.length > 0) {
        setPostable(() => true);
      } else {
        setPostable(() => false);
      }
    },
    [setPostable]
  );

  return <StyledTitleEditor placeholder={placeholder} onChange={onChange} />;
};

TitleEditor.defaultProps = {
  placeholder: 'Title',
};

export default TitleEditor;
