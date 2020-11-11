import React from 'react';
import styled from 'styled-components';

const LabelItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  div {
    pointer-events: none;
    display: flex;
    flex-direction: row;
    div {
      margin-right: 4px;
      width: 14px;
      height: 14px;
      border-radius: 100%;
    }
  }
`;

const LabelDescStyle = styled.span`
  pointer-events: none;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 0 0;
`;

const LabelContent = (props) => {
  return (
    <LabelItemStyle>
      <div>
        <div style={{ backgroundColor: props.value.color }}></div>
        {props.value.name}
      </div>
      <LabelDescStyle>{props.value.description}</LabelDescStyle>
    </LabelItemStyle>
  );
};

export default LabelContent;
