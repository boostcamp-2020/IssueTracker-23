/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styled from 'styled-components';
import EditorWrapper from '@Components/EditorWrapper.jsx';
import IssueDetailItem from './IssueDetailItem.jsx';

const dummyData = {
  title: 'title1',
  description: 'this is title1',
  author: {
    profileUrl: 'https://octodex.github.com/images/femalecodertocat.png',
    id: 'test_id1',
    userName: 'tester1',
  },
  createdDate: '2020-11-10 01:00:00',
  updatedDate: '2020-11-10 05:00:00',
  deletedDate: null,
  issueNumber: 1,
  comments: [
    {
      author: {
        profileUrl:
          'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
        id: 'test_id2',
        userName: 'tester2',
      },
      description: 'this is commenter tester2 first',
      createdDate: '2020-11-10 07:00:00',
      updatedDate: '2020-11-10 09:00:00',
    },
    {
      author: {
        profileUrl:
          'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
        id: 'test_id2',
        userName: 'tester2',
      },
      description: 'this is commenter tester2 second',
      createdDate: '2020-11-10 11:00:00',
      updatedDate: '2020-11-10 15:00:00',
    },
  ],
  // milestone, label, assignees 정보 추가 예정
};

const IssueDetailPartStyle = styled.div`
  position: relative;
  width: 65%;
  top: 90px;
  left: 5%;
  hr {
    margin: 0;
    border: 1px solid black;
  }
`;

const IssueDetailPart = () => {
  // issue detail 정보 불러오기
  const [issueInfo, setIssueInfo] = useState(dummyData);
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
