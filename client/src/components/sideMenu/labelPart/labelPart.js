import React from 'react';
import styled from 'styled-components';

const LabelPartStyle = styled.div`
  width: 45%;
  height: 30px;
  margin: 2px 5px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  border: 1px black solid;
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
