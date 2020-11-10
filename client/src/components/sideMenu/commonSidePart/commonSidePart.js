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
  p,
  svg {
    padding: 3px 4px;
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

const CommonSidePart = ({ title, valueAsTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <CommonSidePartStyle onClick={() => setOpen(!open)}>
      <p>
        {title}
        <WheelIcon width="16" height="16" />
      </p>
      <DropDown values={valueAsTitle} isOpen={open} />
    </CommonSidePartStyle>
  );
};

export default CommonSidePart;
