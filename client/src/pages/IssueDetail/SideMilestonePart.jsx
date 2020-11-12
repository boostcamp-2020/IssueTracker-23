/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import CommonSidePart from '@Components/CommonSidePart.jsx';
import MilestonePart from '@Components/MilestoneInDetail.jsx';
import styled from 'styled-components';

const MilestoneStyle = styled.div`
  width: 100%;
  min-height: 110px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
`;

const SideMilestonePart = ({ setIssueData }) => {
  const [milestone, setMilestone] = useState('');

  const clickItmeHandler = (clickedItem) => {
    if (milestone.id === clickedItem.id) setMilestone('');
    else setMilestone(clickedItem);
  };

  useEffect(() => {
    setIssueData((prevIssueData) => {
      return { ...prevIssueData, milestoneId: milestone.id };
    });
  }, [milestone, setIssueData]);

  return (
    <MilestoneStyle>
      <CommonSidePart
        onClick={clickItmeHandler}
        title="Milestones"
        valueAsTitle={[
          {
            id: 1,
            name: 'milestone1',
            description: 'this is milestone1',
            dueDate: null,
            totalNumber: 3,
            closedNumber: 2,
          },
          {
            id: 2,
            name: 'milestone2',
            description: 'this is milestone2',
            dueDate: '2020-11-10',
            totalNumber: 5,
            closedNumber: 3,
          },
        ]}
      />
      {[milestone].map((elem, index) => {
        return <MilestonePart key={index} value={elem} />;
      })}
    </MilestoneStyle>
  );
};

export default SideMilestonePart;
