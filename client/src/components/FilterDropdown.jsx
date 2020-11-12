import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import DropdownCaret from './DropdownCaret';
import DropdownMenu from './DropdownMenu';
import DropdownOverlay from './DropdownOverlay';
import Button from './Button';

const filters = [
  'Open issues',
  'Your issues',
  'Everything assigned to you',
  'Everthing mentioning you',
  'Cloesed issues',
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

const FilterDropdownMenu = (props) => {
  const filterItems = filters.map((filter, i) => (
    <FilterItemContainer key={i} onClick={props.onClick}>
      {filter}
    </FilterItemContainer>
  ));

  return <DropdownMenu title={'Filter Issues'} items={filterItems} />;
};

const FilterItemContainer = styled.div`
  padding: 8px 16px;
  border-top: 1px solid #d1d5da;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${darken(0.1, '#ffffff')};
    transition: 0.5s;
  }
`;

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
