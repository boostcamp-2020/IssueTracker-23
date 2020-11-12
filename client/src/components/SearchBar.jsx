import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  width: 100%;
  margin: 0 0 0 -1px;
  padding: 5px 12px;
  border: 1px solid #d1d5da;
  border-radius: 0 6px 6px 0;
  background-color: #fafbfc;
  font-size: 14px;
  line-height: 20px;
`;

const SearchBar = (props) => {
  return (
    <Input
      id={props.id}
      placeholder={props.placeholder}
      width={props.width}
      margin={props.margin}
      onKeyPress={props.onKeyPress}
    />
  );
};

export default SearchBar;
