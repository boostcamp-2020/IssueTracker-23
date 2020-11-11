import React from 'react';
import styled from 'styled-components';
import DefaultButton from './DefaultButton';

const StyledButton = styled(DefaultButton)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: white;
`;

const Counter = styled.span`
  min-width: 20px;
  padding: 0 6px;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: #d1d5da80;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

const LabelButton = (props) => {
  const { showCounter, labels } = props;

  return (
    <StyledButton>
      Lables
      {showCounter && <Counter>{labels.length}</Counter>}
    </StyledButton>
  );
};

export default LabelButton;
