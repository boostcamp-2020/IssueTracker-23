import React from 'react';
import styled from 'styled-components';
import IssueListNav from '../../components/IssueListNav';

const StyledIssueList = styled.div`
  padding: 32px;
`;

const IssueList = () => {
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