import React from 'react';
import styled from 'styled-components';

const AssingeePartStyle = styled.div`
  width: 100%;
  height: 30px;
  padding: 4px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  & > img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

const AssigneePart = (props) => {
  return (
    <AssingeePartStyle>
      <img src={props.value.profileUrl} alt={`user's profile`} />
      <label>{props.value.userName}</label>
    </AssingeePartStyle>
  );
};

export default AssigneePart;
