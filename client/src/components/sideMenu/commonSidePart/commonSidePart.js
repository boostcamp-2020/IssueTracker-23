/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import WheelIcon from '@Public/wheelIcon.svg';
import styled from 'styled-components';
import DropDown from '../../dropDown';

const CommonSidePartStyle = styled.div`
  width: 300px;
  height: 30px;
  position: relative;
  border: 1px black solid;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  padding: 4px 4px;
  p,
  svg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    :hover {
      color: rgb(99, 164, 255);
      fill: rgb(99, 164, 255);
    }
  }
`;

const CommonSidePart = (props) => {
  const [open, setOpen] = useState(false);

  const clickHandler = (e) => {
    const clickedValue = e.target.innerText.split('\n')[0];
    setOpen(!open);
    if (e.target.tagName === 'LI') {
      let clickedItem = [];
      if (props.title === 'Assignees') {
        clickedItem = props.valueAsTitle.filter(
          (elem) => elem.userName === clickedValue
        );
      }
      if (props.title === 'Labels') {
        clickedItem = props.valueAsTitle.filter(
          (elem) => elem.name === clickedValue
        );
      }
      props.onClick(clickedItem[0]);
    }
  };

  return (
    <CommonSidePartStyle onClick={clickHandler}>
      <p>
        {props.title}
        <WheelIcon width="16" height="16" />
      </p>
      <DropDown values={props.valueAsTitle} isOpen={open} type={props.title} />
    </CommonSidePartStyle>
  );
};

export default CommonSidePart;
