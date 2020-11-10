import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../../components/DefaultButton';
import DropdownCaret from '../../components/DropdownCaret';

const FilterButton = styled(DefaultButton)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 14px;
`;

const SearchBar = styled.input`
  margin-left: -1px;
  padding: 5px 12px;
  border: 1px solid #d1d5da;
  border-radius: 0 6px 6px 0;
  background-color: #fafbfc;
  color: #586069;
  font-size: 14px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const FlexContainerSpaceBetween = styled(FlexContainer)`
  justify-content: space-between;
`;

const LabelLink = styled(DefaultButton)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const MilestoneLink = styled(DefaultButton)`
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Counter = styled.span`
  min-width: 20px;
  padding: 0 6px;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: #d1d5da80;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

const IssueListNav = () => {
  return (
    <FlexContainerSpaceBetween>
      <FlexContainer>
        <FilterButton>
          Filters
          <DropdownCaret />
        </FilterButton>
        <SearchBar />
      </FlexContainer>
      <FlexContainer>
        <LabelLink buttonColor={'white'}>
          Labels
          <Counter>0</Counter>
        </LabelLink>
        <MilestoneLink buttonColor={'white'}>
          Milestones
          <Counter>0</Counter>
        </MilestoneLink>
      </FlexContainer>
    </FlexContainerSpaceBetween>
  );
};

export default IssueListNav;
