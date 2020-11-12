import React from 'react';
import styled from 'styled-components';
import IssueListNav from '../../components/IssueListNav';

const StyledIssueList = styled.div`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 32px;
`;

const IssueList = () => {
  const repositoryId = 1;
  const labels = [
    { id: 1, name: 'label1', desciption: null, color: '#ffffff' },
    { id: 2, name: 'label2', description: null, color: '#000000' },
  ];
  const milestones = [];

  return (
    <StyledIssueList>
      <IssueListNav labels={labels} milestones={milestones}></IssueListNav>
    </StyledIssueList>
  );
};

export default IssueList;
