import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
const IssueTitleContainer = styled(Link)`
  font-size: 16px;
  font-weight: 600 !important;
  margin: 4% 0;
  text-decoration: none;
  color: black;
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
  console.log(data);
  const stateSvg = () =>
    data.closdAt ? (
      <Svg
        margin="0 10px"
        width="16"
        heigth="16"
        d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"
      />
    ) : (
      <Svg
        margin="0 10px"
        width="16"
        heigth="16"
        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
      />
    );
  const assigneeList = () => {
    return assigneesData
      ? assigneesData.map((elem, i) => <UserProfileUrl key={i} author={elem} />)
      : null;
  };
  const labelData = data.labels;
  const labelList = () => {
    return labelData.map((elem, i) => <LabelPart key={i} value={elem} />);
  };
  const issueLink = `issues/${data.issueNumber}`;
  const milestoneData = data.milestone;
  const mileStoneSvg = () =>
    Object.keys(milestoneData).length > 0 ? (
      <span>
        <Svg
          margin="0 0 0 20px"
          width="13"
          heigth="13"
          d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"
        />
      </span>
    ) : null;
  return (
    <IssueContainer>
      <CheckboxStateContainer>
        <CheckboxContainer>
          <input type="checkbox" />
        </CheckboxContainer>
        {stateSvg()}
      </CheckboxStateContainer>
      <IssueLabelInfoContainer>
        <IsuueLabelContainer>
          <IssueTitleContainer to={issueLink}>{data.title}</IssueTitleContainer>
          <LabelContainer>{labelList()}</LabelContainer>
        </IsuueLabelContainer>
        <IssueInfo>
          <span>
            #{data.issueNumber} opend {data.createdAt.slice(0, 10)}
            {mileStoneSvg()}
            {milestoneData.title}
          </span>
        </IssueInfo>
      </IssueLabelInfoContainer>
      <AssigneeContainer>{assigneeList()}</AssigneeContainer>
    </IssueContainer>
  );
};
export default IssueContent;
