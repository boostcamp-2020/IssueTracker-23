import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button).attrs((props) => ({
  border: '#d1d5da',
}))`
  align-items: flex-end;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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

const LabelButton = (props) => {
  const { showCounter, labels } = props;

  return (
    <StyledButton>
      Labels
      {showCounter && <Counter>{labels.length}</Counter>}
    </StyledButton>
  );
};

export default LabelButton;
