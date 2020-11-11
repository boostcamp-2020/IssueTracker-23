import React from 'react';
import styled from 'styled-components';
import DefaultButton from './DefaultButton';

const StyledButton = styled(DefaultButton)`
  background-color: #2ea44f;
  border-color: #2a8645;
  color: white;
`;

const NewIssueButton = () => {
  return <StyledButton>New Issue</StyledButton>;
};

export default NewIssueButton;
