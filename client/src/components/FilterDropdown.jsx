import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import DropdownCaret from './DropdownCaret';
import DropdownMenu from './DropdownMenu';
import DropdownOverlay from './DropdownOverlay';
import Button from './Button';

const filters = [
  { message: 'Open issues', key: 'isOpen', value: 'true' },
  { message: 'Your issues', key: 'author', value: '@me' },
  { message: 'Everything assigned to you', key: 'assignee', value: '@me' },
  { message: 'Everthing commented by you', key: 'commented', value: '@me' },
  { message: 'Cloesed issues', key: 'isOpen', value: 'false' },
];

const FilterButton = styled(Button).attrs((props) => ({
  background: '#fafbfc',
  border: '#d1d5da',
}))`
  align-items: 
  position: relative;
  height: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  padding: 8px 16px;
  border-top: 1px solid #d1d5da;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
  color: black;

  &:hover {
    background: ${darken(0.1, '#ffffff')};
    transition: 0.5s;
  }
`;

const generateUrl = (filter, myId) => {
  const baseUrl = '/';
  const query = `?${filter.key}=${
    filter.value === '@me' ? myId : filter.value
  }`;
  return baseUrl + query;
};

const FilterDropdownMenu = (props) => {
  const filterItems = filters.map((filter, i) => (
    <StyledLink
      to={generateUrl(filter, 'test_id1')}
      key={i}
      onClick={props.onClick}
      data-search-input={`${filter.key}:${filter.value}`}
    >
      {filter.message}
    </StyledLink>
  ));

  return <DropdownMenu title={'Filter Issues'} items={filterItems} />;
};

const FilterDropdown = (props) => {
  const {
    isFilterOpened,
    dropdownHandler,
    closeDropdownHandler,
    filterClickHandler,
  } = props;

  return (
    <div>
      <FilterButton onClick={dropdownHandler}>
        Filters
        <DropdownCaret />
      </FilterButton>
      {isFilterOpened && (
        <div>
          <DropdownOverlay onClick={closeDropdownHandler} />
          <FilterDropdownMenu onClick={filterClickHandler} />
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
