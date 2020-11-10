/* eslint-disable import/no-unresolved */
import React from 'react';
import CommonSidePart from '@Components/sideMenu/commonSidePart';
// import AssigneePart from '@Components/sideMenu/assigneePart';

const SideAssignPart = () => {
  return (
    <div>
      <CommonSidePart
        title="Assignees"
        valueAsTitle={[
          ['test_id1', 'tester1'],
          ['test_id2', 'tester2'],
        ]}
      />
      {/* <AssigneePart
        userName="JBJ"
        url="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      />
      <AssigneePart
        userName="BLAH1"
        url="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      /> */}
    </div>
  );
};

export default SideAssignPart;
