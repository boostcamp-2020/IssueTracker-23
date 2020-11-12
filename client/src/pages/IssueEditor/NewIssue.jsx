import React from 'react';
import styled from 'styled-components';
import EditorWrapper from '../../components/EditorWrapper.jsx';
import SideAssigneePart from '../IssueDetail/SideAssigneePart.jsx';
import SideLabelPart from '../IssueDetail/SideLabelPart.jsx';
import SideMilestonePart from '../IssueDetail/SideMilestonePart.jsx';

const StyledPage = styled.div`
  margin: 30px;
`;

const SidePartStyle = styled.div`
  position: absolute;
  width: 20%;
  top: 90px;
  right: 5%;
  margin-left: 30px;
`;

const NewIssue = () => {
  return (
    <StyledPage>
      <EditorWrapper />
      <SidePartStyle>
        <SideAssigneePart />
        <SideLabelPart />
        <SideMilestonePart />
      </SidePartStyle>
    </StyledPage>
  );
};

export default NewIssue;
