import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  position: flex;
  top: 0;
  width: 100%;
  height: 75px;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 24px;
  line-height: 70px;
`;

const Header = () => {
  return <HeaderStyle>Issue Tracker 23</HeaderStyle>;
};

export default Header;
