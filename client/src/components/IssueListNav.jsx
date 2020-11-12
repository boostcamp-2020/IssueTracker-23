import React, { useState } from 'react';
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

const searchInputToUrl = (searchInput, myId) => {
  const baseUrl = '/';
  const keywords = searchInput.split(' ');

  const query = keywords
    .map((keyword) => {
      if (keyword.includes(':'))
        return keyword.replaceAll(':', '=').replaceAll('@me', myId);
      return `q=${keyword}`;
    })
    .reduce((acc, val) => `${acc}&${val}`);

  return `${baseUrl}?${query}`;
};

const IssueListNav = (props) => {
  const { labels, milestones, ...rest } = props;

  const [isQuerySubmitted, setQuerySubmitted] = useState(false);
  const [isFilterOpened, setFilterOpened] = useState(false);

  const searchBarEnterHandler = (e) => {
    if (e.key === 'Enter') {
      const searchInput = document.getElementById('searchBar').value;
      const url = searchInputToUrl(searchInput, 'test_id1');
      setQuerySubmitted(true);
      props.history.push(url);
    }
  };
  const searchBarClearHandler = () => {
    document.getElementById('searchBar').value = '';
    setQuerySubmitted(false);
  };
  const dropdownHandler = () => setFilterOpened(!isFilterOpened);
  const closeDropdownHandler = () => setFilterOpened(false);
  const filterClickHandler = (e) => {
    document.getElementById('searchBar').value = e.target.dataset.searchInput;
    setQuerySubmitted(true);
    closeDropdownHandler();
  };

  return (
    <div>
      <FlexContainerJustifyBetween>
        <FlexContainerWidthFull>
          <FilterDropdown
            {...{
              isFilterOpened,
              dropdownHandler,
              closeDropdownHandler,
              filterClickHandler,
            }}
          />
          <SearchBar
            id="searchBar"
            placeholder="Search all issues"
            onKeyPress={searchBarEnterHandler}
            {...rest}
          />
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
      {isQuerySubmitted && (
        <Link to="/">
          <Button
            transparent={true}
            border="none"
            onClick={searchBarClearHandler}
          >
            clear
          </Button>
        </Link>
      )}
    </div>
  );
};

export default IssueListNav;
