import React from 'react';
import styled from 'styled-components';

const LabelPartStyle = styled.div`
  width: 45%;
  height: 30px;
  padding: 4px;
  margin: 2px 4px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  border-radius: 2em;
  > div {
    margin: auto;
  }
`;

const LabelPart = (props) => {
  return (
    <LabelPartStyle style={{ backgroundColor: props.value.color }}>
      <div>{props.value.name}</div>
    </LabelPartStyle>
  );
};

export default LabelPart;
