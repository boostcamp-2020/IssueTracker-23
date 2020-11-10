import React from 'react';
import styled from 'styled-components';

const DropDownStyle = styled.ul`
  list-style: none;
  cursor: pointer;
  position: absolute;
  border: 1px black solid;
  box-sizing: border-box;
  left: 47px;
  top: 20px;
  padding: 0;
  background-color: white;
  z-index: 1;
  font-size: 14px;
  line-height: 14px;
  & > li {
    box-sizing: border-box;
    padding: 8px;
    width: 250px;
    height: auto;
    :hover {
      background-color: rgb(230, 232, 235);
    }
  }
`;

const AssigneeItemStyle = styled.li`
  & > img {
    pointer-events: none;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;
const LabelDescStyle = styled.span`
  pointer-events: none;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 0 0;
`;

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
      border: 1px black none;
      border-radius: 100%;
    }
  }
`;

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

const ValueAsTitle = (props) => {
  if (props.type === 'Assignees')
    return (
      <AssigneeItemStyle>
        <img src={props.value.profileUrl} alt={`user's profile`} />
        {props.value.userName}
      </AssigneeItemStyle>
    );
  if (props.type === 'Labels')
    return (
      <LabelItemStyle>
        <div>
          <div style={{ backgroundColor: props.value.color }}></div>
          {props.value.name}
        </div>
        <LabelDescStyle>{props.value.description}</LabelDescStyle>
      </LabelItemStyle>
    );
  if (props.type === 'Milestones') {
    let milestoneDueDate = null;
    if (props.value.dueDate === null) milestoneDueDate = <div>No due date</div>;
    else milestoneDueDate = <div>{props.value.dueDate}</div>;
    return (
      <MilestoneStyle>
        {props.value.name}
        <div>{milestoneDueDate}</div>
      </MilestoneStyle>
    );
  }
  return null;
};

const DropDown = (props) => {
  if (props.isOpen) {
    return (
      <DropDownStyle>
        {props.values.map((elem, index) => (
          <ValueAsTitle key={index} value={elem} type={props.type} />
        ))}
      </DropDownStyle>
    );
  }
  return null;
};

export default DropDown;
