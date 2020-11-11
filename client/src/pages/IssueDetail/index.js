import React from 'react';
import styled from 'styled-components';
import IssueDetailPart from './IssueDetailPart.jsx';
import SideAssigneePart from './SideAssigneePart.jsx';
import SideLabelPart from './SideLabelPart.jsx';
import SideMilestonePart from './SideMilestonePart.jsx';

const SidePartStyle = styled.div`
  position: absolute;
  width: 20%;
  top: 90px;
  right: 5%;
  margin-left: 30px;
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
