import React from 'react';
import styled from 'styled-components';
import LabelPart from '../LabelInDetail.jsx';
import UserProfileUrl from '../UserProfileUrl.jsx';
import Svg from './Svg.jsx';

const IssueContainer = styled.div`
  display: flex;
  padding: 10px 16px;
  width: -webkit-fill-available;
`;
const IssueLabelInfoContainer = styled.div`
  display: block;
`;
const IsuueLabelContainer = styled.span`
  display: flex;
`;
const IssueTitleContainer = styled.a`
  font-size: 16px;
  font-weight: 600 !important;
  margin: 4% 0;
  cursor: pointer;
`;
const LabelContainer = styled.span`
  display: flex;
`;
const AssigneeContainer = styled.div`
  margin-left: 100px;
  text-align: center;
`;

const IssueInfo = styled.div`
  font-size: 12px !important;
  line-height: 1.5;
  color: #586069;
  display: flex;
`;

const CheckboxStateContainer = styled.span`
  display: flex;
  margin: 3% 0;
`;

const CheckboxContainer = styled.div``;

const IssueContent = ({ data }) => {
  const assigneesData = data.assignees;
  const assigneeList = () => {
    return assigneesData
      ? assigneesData.map((elem, i) => <UserProfileUrl key={i} author={elem} />)
      : null;
  };
  const labelData = data.labels;
  const labelList = () => {
    return labelData.map((elem, i) => <LabelPart key={i} value={elem} />);
  };
  return (
    <IssueContainer>
      <CheckboxStateContainer>
        <CheckboxContainer>
          <input type="checkbox" />
        </CheckboxContainer>
        <Svg
          margin="0 10px"
          width="16"
          heigth="16"
          d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
        />
      </CheckboxStateContainer>
      <IssueLabelInfoContainer>
        <IsuueLabelContainer>
          <IssueTitleContainer>{data.title}</IssueTitleContainer>
          <LabelContainer>{labelList()}</LabelContainer>
        </IsuueLabelContainer>
        <IssueInfo>
          <span>
            #{data.issueNumber} opend {data.createdAt}
          </span>
          <Svg
            margin="0 0 0 20px"
            width="13"
            heigth="13"
            d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"
          />
          <span>{data.milestone.title}</span>
        </IssueInfo>
      </IssueLabelInfoContainer>
      <AssigneeContainer>{assigneeList()}</AssigneeContainer>
    </IssueContainer>
  );
};
export default IssueContent;
