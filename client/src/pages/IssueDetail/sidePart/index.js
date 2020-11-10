import React from 'react';
import styled from 'styled-components';
import SideAssigneePart from './sideAssigneePart';
import SideLabelPart from './sideLabelPart';
import SideMilestonePart from './sideMilestonePart';

const SidePartStyle = styled.div`
  position: fixed;
  width: 300px;
  top: 75px;
  right: 0;
  margin: 0;
  border: 1px solid black;
`;

const SidePart = () => {
  return (
    <SidePartStyle>
      <SideAssigneePart />
      <SideLabelPart />
      <SideMilestonePart />
    </SidePartStyle>
  );
};

export default SidePart;
