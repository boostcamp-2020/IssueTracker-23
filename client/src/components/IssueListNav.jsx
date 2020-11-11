import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import LabelButton from './LabelButton';
import MilestoneButton from './MilestoneButton';
import NewIssueButton from './NewIssueButton';

const FlexContainer = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
`;

const FlexContainerWidthFull = styled(FlexContainer)`
  width: 100%;
`;

const FlexContainerJustifyBetween = styled(FlexContainer)`
  justify-content: space-between;
`;

const IssueListNav = (props) => {
  const { labels, milestones } = props;
  return (
    <FlexContainerJustifyBetween>
      <FlexContainerWidthFull>
        <SearchBar placeholder="Search all issues" />
        <FlexContainer margin={'0 0 0 16px'}>
          <LabelButton showCounter={true} labels={labels} />
          <MilestoneButton showCounter={true} milestones={milestones} />
        </FlexContainer>
      </FlexContainerWidthFull>
      <FlexContainerJustifyBetween margin={'0 0 0 16px'}>
        <NewIssueButton />
      </FlexContainerJustifyBetween>
    </FlexContainerJustifyBetween>
  );
};

export default IssueListNav;
