import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownCaret from '../../components/DropdownCaret';
import DropdownMenu from '../../components/DropdownMenu.jsx';
import DropdownOverlay from '../../components/DropdownOverlay';
import DefaultButton from '../../components/DefaultButton';

const FilterButton = styled(DefaultButton)`
  position: relative;
  height: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 14px;
`;

const FilterDropdownMenu = () => <DropdownMenu title={'Filter Issues'} />;

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
