import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownCaret from '../../components/DropdownCaret';
import DropdownMenu from '../../components/DropdownMenu.jsx';
import DropdownOverlay from '../../components/DropdownOverlay';
import DefaultButton from '../../components/DefaultButton';

const filters = [
  'Open issues',
  'Your issues',
  'Everything assigned to you',
  'Everthing mentioning you',
  'Cloesed issues',
];

const FilterButton = styled(DefaultButton)`
  position: relative;
  height: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 14px;
`;

const FilterDropdownMenu = () => {
  const filterItems = filters.map((filter) => (
    <FilterItemContainer>{filter}</FilterItemContainer>
  ));

  return <DropdownMenu title={'Filter Issues'} items={filterItems} />;
};

const FilterItemContainer = styled.div`
  padding: 8px 16px;
  border-top: 1px solid #d1d5da;
  cursor: pointer;
  font-size: 12px;
`;

const FilterDropdown = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  const dropdownHandler = () => setIsFilterOpened(!isFilterOpened);
  const closeDropdownHandler = () => setIsFilterOpened(false);

  return (
    <div>
      <FilterButton onClick={dropdownHandler}>
        Filters
        <DropdownCaret />
      </FilterButton>
      {isFilterOpened && (
        <div>
          <DropdownOverlay onClick={closeDropdownHandler} />
          <FilterDropdownMenu />
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
