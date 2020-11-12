import React from 'react';
import styled from 'styled-components';
import FilterItem from './Filter';

const Ul = styled.ul`
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  list-style-type: none;
`;

const FilterList = () => {
  const filters = [
    'Open issues',
    'Your issues',
    'Everything assigned to you',
    'Everthing mentioning you',
    'Cloesed issues',
  ];

  return (
    <Ul>
      {filters.map((filter, i) => (
        <FilterItem key={i + 1} text={filter} padding="8px 12px" />
      ))}
    </Ul>
  );
};

export default FilterList;
