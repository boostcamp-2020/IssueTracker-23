import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IssueListNav from '../../components/IssueListNav.jsx';
import IssueListHeader from '../../components/IssueListHeader.jsx';
import IssueContent from '../../components/issueList/IssueContent.jsx';
import List from '../../components/List.jsx';
import 'babel-polyfill';

const StyledIssueList = styled.div`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 32px;
`;

const headerComponent = <IssueListHeader borderRadius="16px" />;
const emptyComponent = <div>empty</div>;

const IssueList = (props) => {
  const [query, setQuery] = useState(props.location.search);
  const [content, setContent] = useState([]);
  const [labels, setLabel] = useState([]);
  const [milestones, setMilestone] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const articleData = await fetch(
        `http://101.101.208.162:3000/api/issues/1${query}`
      );
      const articleDataJson = await articleData.json();
      const { data } = articleDataJson;
      const { issueList } = data;
      const articleRes = issueList.map((elem, i) => (
        <IssueContent data={elem} />
      ));
      setContent(articleRes);

      const labelData = await fetch(`http://101.101.208.162:3000/api/labels/1`);
      const labelDataJson = await labelData.json();
      setLabel(labelDataJson.data);
      const milestoneData = await fetch(
        'http://101.101.208.162:3000/api/milestones/1'
      );
      const milestoneDataJson = await milestoneData.json();
      setMilestone(milestoneDataJson.data);
    };
    fetchArticles();
  }, [query]);

  return (
    <StyledIssueList>
      <IssueListNav
        labels={labels}
        milestones={milestones}
        setQuery={setQuery}
        {...props}
      ></IssueListNav>
      <List
        margin="16px 0"
        borderRadius="16px"
        content={content}
        header={headerComponent}
        emptyComponent={emptyComponent}
      />
    </StyledIssueList>
  );
};

export default IssueList;
