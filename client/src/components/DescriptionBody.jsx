import React from 'react';
import styled from 'styled-components';

const DescriptionBodyStyle = styled.div`
  border: 1px solid black;
  border-top: transparent;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding: 12px 20px;
  word-break: keep-all;
`;

const VerticalLine = styled.div`
  position: relative;
  left: 15px;
  border-left: 1px solid black;
  width: 0;
  height: 50px;
`;

const DescriptionHeader = (props) => {
  return (
    <div>
      <DescriptionBodyStyle>{props.value.description}</DescriptionBodyStyle>
      <VerticalLine />
    </div>
  );
};

export default DescriptionHeader;
