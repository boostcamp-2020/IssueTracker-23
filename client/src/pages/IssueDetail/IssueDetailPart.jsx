/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import EditorWrapper from '@Components/EditorWrapper.jsx';
import IssueDetailItem from './IssueDetailItem.jsx';

const IssueDetailPartStyle = styled.div`
  position: flex;
  width: 80%;
  top: 90px;
  left: 5%;
  hr {
    margin: 0;
    border: 1px solid black;
  }
`;

const IssueDetailPart = (props) => {
  // issue detail 정보 불러오기
  const issueInfo = props.value;
  return (
    <IssueDetailPartStyle>
      <IssueDetailItem isOwner={true} value={issueInfo} />
      {issueInfo.comments.map((elem, index) => (
        <IssueDetailItem key={index} isOwner={false} value={elem} />
      ))}
      <hr />
      <EditorWrapper value={issueInfo} />
    </IssueDetailPartStyle>
  );
};

export default IssueDetailPart;
