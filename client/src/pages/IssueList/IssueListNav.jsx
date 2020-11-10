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

const IssueListNav = () => {
  return (
    <FlexContainer>
      <FilterButton>
        Filters
        <DropdownCaret />
      </FilterButton>
      <SearchBar />
    </FlexContainer>
  );
};

export default IssueListNav;
