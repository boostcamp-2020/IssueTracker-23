/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import CommonSidePart from '@Components/sideMenu/commonSidePart';
import AssigneePart from '@Components/sideMenu/assigneePart';

const SideAssigneePart = () => {
  const [assignedUser, setAssignedUser] = useState([]); // 여기에 assignee 불러와야함

  const clickItmeHandler = (clickedItem) => {
    const clickedIndex = assignedUser.findIndex(
      (elem) => elem.id === clickedItem.id
    );
    const newList = [...assignedUser];
    if (clickedIndex !== -1) {
      newList.splice(clickedIndex, 1);
    } else {
      newList.push(clickedItem);
    }
    setAssignedUser(newList);
  };

  return (
    <div>
      <CommonSidePart
        title="Assignees"
        onClick={clickItmeHandler}
        valueAsTitle={[
          {
            id: 'test_id1',
            userName: 'tester1',
            profileUrl:
              'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
          },
          {
            id: 'test_id2',
            userName: 'tester2',
            profileUrl:
              'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
          },
        ]}
      />
      {assignedUser.map((elem) => {
        return <AssigneePart key={elem.id} value={elem} />;
      })}
    </div>
  );
};

export default SideAssigneePart;
