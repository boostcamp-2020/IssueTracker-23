import React from 'react';
import styled from 'styled-components';

const AssingeePartStyle = styled.div`
  width: 200px;
  height: 30px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  & > img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const AssigneePart = ({ url, userName }) => {
  return (
    <AssingeePartStyle>
      <img src={url} />
      <label>{userName}</label>
    </AssingeePartStyle>
  );
};

export default AssigneePart;