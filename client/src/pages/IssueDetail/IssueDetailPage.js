import React from 'react';
import CommonSidePart from '@Components/sideMenu/commonSidePart';
import AssigneePart from '@Components/sideMenu/assigneePart';

const IssueDetailPage = () => {
  return (
    <div>
      <CommonSidePart title="Assignees" />
      <AssigneePart
        userName="JBJ"
        url="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      />
      <AssigneePart
        userName="BLAH1"
        url="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      />
      <CommonSidePart title="Labels" />
      <CommonSidePart title="Milestones" />
    </div>
  );
};

export default IssueDetailPage;
