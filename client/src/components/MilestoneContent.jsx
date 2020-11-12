import React from 'react';
import styled from 'styled-components';

const MilestoneStyle = styled.div`
  font-size: 14px;
  line-height: 14px;
  box-sizing: border-box;
  div {
    margin: 4px 0 0 0;
    font-size: 12px;
    line-height: 12px;
    pointer-events: none;
  }
`;

// 현재 위에서 styled.div로 되어있어서 클릭이 안됨 li로 바꾸면 다시 잘됨
const MilestoneContent = (props) => {
  let milestoneDueDate = null;
  if (props.value.dueDate === null) milestoneDueDate = <div>No due date</div>;
  else milestoneDueDate = <div>{props.value.dueDate}</div>;
  return (
    <MilestoneStyle>
      {props.value.name}
      <div>{milestoneDueDate}</div>
    </MilestoneStyle>
  );
};

export default MilestoneContent;
