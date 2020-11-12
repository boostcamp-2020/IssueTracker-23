import React from 'react';
import styled from 'styled-components';

const DropdownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 300px;
  height: auto;
  max-height: 480px;
  margin: 8px 0;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0.4em 0.4em 1em 0.4em rgba(0, 0, 0, 0.04);
  z-index: 99;
`;

const DropdownHeaderContainer = styled.div`
  padding: 8px 16px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #fafbfc;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const DropdownMenu = ({ title, items }) => {
  return (
    <DropdownMenuContainer>
      <DropdownHeaderContainer>
        <Title>{title}</Title>
      </DropdownHeaderContainer>
      <>{items}</>
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;
