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
  background-color: white;
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

const ValueAsTitle = (props) => {
  if (props.type === 'assignees') return <li>{props.value.userName}</li>;
  return null;
};

const DropDown = (props) => {
  if (props.isOpen) {
    return (
      <DropDownStyle>
        {props.values.map((elem) => (
          <ValueAsTitle key={elem.id} value={elem} type={props.type} />
        ))}
      </DropDownStyle>
    );
  }
  return null;
};

export default DropDown;
