import React from 'react';
import styled from 'styled-components';

const IssueDetailHeaderStyle = styled.div`
  position: flex;
  margin: 16px 0;
  top: 75px;
`;
const IssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px;
  padding: 8px;
  box-sizing: border-box;
`;
const Title = styled.div`
  margin-right: 8px;
`;
const IssueNumber = styled.div`
  color: gray;
`;
const IssueTimeline = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 14px;
`;
const IsOpenIssue = styled.div`
  width: fit-content;
  padding: 5px 12px;
  margin-right: 8px;
  border-radius: 1em;
  line-height: 20px;
  text-align: center;
  color: white;
`;
const CreateAuthor = styled.div`
  line-height: 18px;
  margin: auto 4px auto 0;
  font-weight: 600;
`;
const Timeline = styled.div`
  line-height: 18px;
  margin: auto 4px auto 0;
`;
const CommentNumber = styled.div`
  line-height: 18px;
  margin-right: 4px;
  margin: auto 0;
`;

const IssueDetailHeader = (props) => {
  return (
    <IssueDetailHeaderStyle>
      <IssueTitle>
        <Title>{props.value.title}</Title>
        <IssueNumber>#{props.value.issueNumber}</IssueNumber>
      </IssueTitle>
      <IssueTimeline>
        {props.value.closedDate === null ? (
          <IsOpenIssue style={{ backgroundColor: '#28A745' }}>Open</IsOpenIssue>
        ) : (
          <IsOpenIssue style={{ backgroundColor: 'purple' }}>
            Closed
          </IsOpenIssue>
        )}
        <CreateAuthor>{props.value.author.userName} </CreateAuthor>
        <Timeline>opened this issue at {props.value.createdDate}</Timeline>
        <CommentNumber> · {props.value.comments.length} comments</CommentNumber>
      </IssueTimeline>
    </IssueDetailHeaderStyle>
  );
};

export default IssueDetailHeader;
