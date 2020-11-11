import React from 'react';
import styled from 'styled-components';
import IssueDetailPart from './IssueDetailPart.jsx';
import SideAssigneePart from './SideAssigneePart.jsx';
import SideLabelPart from './SideLabelPart.jsx';
import SideMilestonePart from './SideMilestonePart.jsx';

const SidePartStyle = styled.div`
  position: fixed;
  width: 300px;
  top: 75px;
  right: 0;
  margin: 0;
  border: 1px solid black;
`;

const IssueDetail = () => {
  return (
    <div>
      <IssueDetailPart />
      <SidePartStyle>
        <SideAssigneePart />
        <SideLabelPart />
        <SideMilestonePart />
      </SidePartStyle>
    </div>
  );
};

export default IssueDetail;
