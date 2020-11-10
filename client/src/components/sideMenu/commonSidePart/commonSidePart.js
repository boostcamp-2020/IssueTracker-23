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
    setOpen(!open);
    if (e.target.tagName === 'LI') {
      const clickedItem = props.valueAsTitle.filter(
        (elem) => elem.userName === e.target.innerText
      );
      props.onClick(clickedItem[0]);
    }
  };

  return (
    <CommonSidePartStyle onClick={clickHandler}>
      <p>
        {props.title}
        <WheelIcon width="16" height="16" />
      </p>
      <DropDown values={props.valueAsTitle} isOpen={open} type="assignees" />
    </CommonSidePartStyle>
  );
};

export default CommonSidePart;
