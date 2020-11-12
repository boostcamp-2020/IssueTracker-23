/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import CommonSidePart from '@Components/CommonSidePart.jsx';
import AssigneePart from '@Components/AssigneeInDetail.jsx';
import styled from 'styled-components';

const NoAssigneeStyle = styled.div`
  padding: 4px;
  font-size: 14px;
`;
const AssigneeListStyle = styled.div`
  padding: 4px;
  width: 100%;
  min-height: 75px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
`;

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
      <AssigneeListStyle>
        {assignedUser.length === 0 ? (
          <NoAssigneeStyle>No Assignee. assign yourself!</NoAssigneeStyle>
        ) : (
          assignedUser.map((elem, index) => {
            return <AssigneePart key={index} value={elem} />;
          })
        )}
      </AssigneeListStyle>
    </div>
  );
};

export default SideAssigneePart;
