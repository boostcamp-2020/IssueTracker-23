import React from 'react';
import styled from 'styled-components';

const AssigneeItemStyle = styled.li`
  & > img {
    pointer-events: none;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;

const AssigneeContent = (props) => {
  return (
    <AssigneeItemStyle>
      <img src={props.value.profileUrl} alt={`user's profile`} />
      {props.value.userName}
    </AssigneeItemStyle>
  );
};

export default AssigneeContent;
