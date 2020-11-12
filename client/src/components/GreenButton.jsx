import React from 'react';
import styled from 'styled-components';
import DefaultButton from './DefaultButton';

const StyledButton = styled(DefaultButton)`
  background-color: #2ea44f;
  border-color: #2a8645;
  color: white;
`;

const GreenButton = (props) => {
  const { text } = props;
  return <StyledButton>{text}</StyledButton>;
};

export default GreenButton;
