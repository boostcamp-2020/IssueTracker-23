import React from 'react';
import styled from 'styled-components';

const DropDownStyle = styled.ul`
  list-style: none;
  cursor: pointer;
  position: absolute;
  border: 1px black solid;
  box-sizing: border-box;
  left: 47px;
  top: 20px;
  padding: 0;
  & > li {
    box-sizing: border-box;
    padding: 8px;
    width: 250px;
    height: 40px;
    :hover {
      background-color: rgb(230, 232, 235);
    }
  }
`;

const ValueAsTitle = ({ value }) => {
  console.log('val', value[1]);
  return <li>{value[1]}</li>;
};

const DropDown = ({ isOpen, values }) => {
  if (isOpen) {
    return (
      <DropDownStyle>
        {values.map((elem) => (
          <ValueAsTitle key={elem[0]} value={elem} />
        ))}
      </DropDownStyle>
    );
  }
  return null;
};

export default DropDown;
