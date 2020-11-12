import React from 'react';
import styled from 'styled-components';

const MilestoneStyle = styled.li`
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
