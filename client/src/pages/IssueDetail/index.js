import React, { useState } from 'react';
import styled from 'styled-components';
import IssueDetailHeader from '../../components/IssueDetailHeader.jsx';
import IssueDetailPart from './IssueDetailPart.jsx';
import SideAssigneePart from './SideAssigneePart.jsx';
import SideLabelPart from './SideLabelPart.jsx';
import SideMilestonePart from './SideMilestonePart.jsx';

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
  closedDate: null,
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

const IssueDetailContainer = styled.div`
  margin: auto;
  padding: 0 16px;
  max-width: 1280px;
`;
const IssueDetailBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 4px 16px;
`;

const SidePartStyle = styled.div`
  position: flex;
  width: 20%;
  top: 90px;
  margin-left: 30px;
`;

const IssueDetail = () => {
  const [issueInfo, setIssueInfo] = useState(dummyData);
  return (
    <IssueDetailContainer>
      <IssueDetailHeader value={issueInfo} />
      <IssueDetailBody>
        <IssueDetailPart value={issueInfo} />
        <SidePartStyle>
          <SideAssigneePart />
          <SideLabelPart />
          <SideMilestonePart />
        </SidePartStyle>
      </IssueDetailBody>
    </IssueDetailContainer>
  );
};

export default IssueDetail;
