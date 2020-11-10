import React from 'react';
import CommonSidePart from '../../components/sideMenu';

const IssueDetailPage = () => {
  return (
    <div>
      <CommonSidePart title="Assignees" />
      <CommonSidePart title="Labels" />
      <CommonSidePart title="Milestones" />
    </div>
  );
};

export default IssueDetailPage;
