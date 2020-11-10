import React, { useState } from 'react';
import WheelIcon from '../../../public/wheelIcon.svg';
import styled from 'styled-components';

const CommonSidePartStyle = styled.div`
  width: 200px;
  height: 30px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  :hover {
    & > p,
    svg {
      color: rgb(99, 164, 255);
      fill: rgb(99, 164, 255);
    }
  }
`;

const CommonSidePart = ({ title }) => {
  return (
    <CommonSidePartStyle>
      <p>{title}</p>
      <WheelIcon width="16" height="16" />
    </CommonSidePartStyle>
  );
};

export default CommonSidePart;
