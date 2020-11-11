import React from 'react';
import styled from 'styled-components';
import AssigneeContent from './AssigneeContent.jsx';
import LabelContent from './LabelContent.jsx';
import MilestoneContent from './MilestoneContent.jsx';

const DropDownStyle = styled.ul`
  list-style: none;
  cursor: pointer;
  position: absolute;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

const ValueAsTitle = (props) => {
  if (props.type === 'Assignees')
    return <AssigneeContent value={props.value} />;
  if (props.type === 'Labels') return <LabelContent value={props.value} />;
  if (props.type === 'Milestones')
    return <MilestoneContent value={props.value} />;
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
