import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FilterDropdown from './FilterDropdown';
import SearchBar from './SearchBar';
import LabelButton from './LabelButton';
import MilestoneButton from './MilestoneButton';
import Button from './Button';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

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
        <FilterDropdown />
        <SearchBar placeholder="Search all issues" />
        <FlexContainer margin={'0 0 0 16px'}>
          <StyledLink to="/labels">
            <LabelButton showCounter={true} labels={labels} />
          </StyledLink>
          <StyledLink to="/milestones">
            <MilestoneButton showCounter={true} milestones={milestones} />
          </StyledLink>
        </FlexContainer>
      </FlexContainerWidthFull>
      <FlexContainerJustifyBetween margin={'0 0 0 16px'}>
        <StyledLink to="issue/new">
          <Button background="#2ea44f" border="#2a8645" color="white">
            New issue
          </Button>
        </StyledLink>
      </FlexContainerJustifyBetween>
    </FlexContainerJustifyBetween>
  );
};

export default IssueListNav;
