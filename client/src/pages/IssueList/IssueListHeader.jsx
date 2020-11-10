import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../../components/DefaultButton';
import DropdownCaret from '../../components/DropdownCaret';

const FlexContainer = styled.div`
  display: flex;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius || 0};
  background-color: ${(props) => props.backgroundColor};
`;

const FlexContainerJustifyBetween = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
`;

const FlexContainerJustifyEnd = styled(FlexContainer)`
  justify-content: flex-end;
`;

const DropdownToggle = styled(DefaultButton)`
  border: none;
  background-color: Transparent;
  font-weight: 300;
`;

const IssueListHeader = (props) => {
  return (
    <FlexContainerJustifyBetween
      width={'100%'}
      padding={'16px'}
      backgroundColor={'#F6F8FA'}
      borderRadius={props.borderRadius}
    >
      <FlexContainer>
        <input type="checkbox" />
      </FlexContainer>
      <FlexContainerJustifyEnd>
        <DropdownToggle>
          Author
          <DropdownCaret />
        </DropdownToggle>
        <DropdownToggle>
          Label
          <DropdownCaret />
        </DropdownToggle>
        <DropdownToggle>
          Milestones
          <DropdownCaret />
        </DropdownToggle>
        <DropdownToggle>
          Assignee
          <DropdownCaret />
        </DropdownToggle>
      </FlexContainerJustifyEnd>
    </FlexContainerJustifyBetween>
  );
};

export default IssueListHeader;
