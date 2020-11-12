import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import EditorWrapper from '../../components/EditorWrapper.jsx';
import SideAssigneePart from '../IssueDetail/SideAssigneePart.jsx';
import SideLabelPart from '../IssueDetail/SideLabelPart.jsx';
import SideMilestonePart from '../IssueDetail/SideMilestonePart.jsx';

const StyledPage = styled.div`
  margin: 30px;
`;

const SidePartStyle = styled.div`
  position: absolute;
  width: 20%;
  top: 90px;
  right: 5%;
  margin-left: 30px;
`;

const host = 'http://101.101.208.162:3000';
const repositoryId = 1;
const NewIssue = () => {
  const [issueData, setIssueData] = useState({ author: 'test_id1' });

  const history = useHistory();
  const onClickCancel = () => {
    history.push('/');
  };
  const onClickPost = () => {
    const title = document.getElementById('title-editor').value;
    const description = document.getElementById('textarea').value;
    Axios.post(`${host}/api/issues/${repositoryId}`, {
      ...issueData,
      title,
      description,
    }).then((res) => {
      console.log(res);
      history.push('/');
    });
  };

  return (
    <StyledPage>
      <EditorWrapper
        onClickCancel={onClickCancel}
        onClickPost={onClickPost}
        host={host}
      />
      <SidePartStyle>
        <SideAssigneePart setIssueData={setIssueData} />
        <SideLabelPart setIssueData={setIssueData} />
        <SideMilestonePart setIssueData={setIssueData} />
      </SidePartStyle>
    </StyledPage>
  );
};

export default NewIssue;
