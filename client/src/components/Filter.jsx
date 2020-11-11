import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  padding: ${(props) => props.padding || 0};
`;

const Filter = ({ text, padding }) => {
  return <Li padding={padding}>{text}</Li>;
};

export default Filter;
