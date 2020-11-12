import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button).attrs((props) => ({
  border: '#d1d5da',
}))`
  align-items: flex-end;
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: white;
`;

const Counter = styled.span`
  min-width: 20px;
  margin: 0 0 0 4px;
  padding: 0 6px;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: #d1d5da80;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

const MilestoneButton = (props) => {
  const { showCounter, milestones } = props;

  return (
    <StyledButton>
      Milestones
      {showCounter && <Counter>{milestones.length}</Counter>}
    </StyledButton>
  );
};

export default MilestoneButton;
