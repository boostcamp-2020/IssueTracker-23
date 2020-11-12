/* eslint-disable import/no-unresolved */
import React from 'react';
import DescriptionHeader from '@Components/DescriptionHeader.jsx';
import DescriptionBody from '@Components/DescriptionBody.jsx';
import UserProfileUrl from '@Components/UserProfileUrl.jsx';
import styled from 'styled-components';

const IssueDetailItemStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const IssueDetailItem = (props) => {
  return (
    <IssueDetailItemStyle>
      <UserProfileUrl author={props.value.author} />
      <div style={{ width: '100%' }}>
        <DescriptionHeader isOwner={props.isOwner} value={props.value} />
        <DescriptionBody value={props.value} />
      </div>
    </IssueDetailItemStyle>
  );
};

export default IssueDetailItem;
