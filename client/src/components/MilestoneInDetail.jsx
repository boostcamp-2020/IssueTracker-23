import React from 'react';
import styled from 'styled-components';

const NoMilestoneStyle = styled.div`
  margin: 8px;
  font-size: 14px;
`;
const MilestonePartStyle = styled.div`
  margin: 8px 4px;
  > div {
    height: 10px;
    border-radius: 1em;
    background-color: rgb(214, 214, 214);
    > div {
      width: 0;
      height: 10px;
      background-color: rgb(43, 184, 0);
      border-radius: 1em;
    }
  }
  > p {
    font-size: 14px;
    line-height: 14px;
    margin: 12px 0 0 4px;
  }
`;

const MilestonePart = (props) => {
  const progressWidth =
    (props.value.closedNumber / props.value.totalNumber) * 100 || 0;

  if (progressWidth !== 0)
    return (
      <MilestonePartStyle>
        <div>
          <div style={{ width: `${progressWidth}%` }}></div>
        </div>
        <p>{props.value.name}</p>
      </MilestonePartStyle>
    );
  return <NoMilestoneStyle>No Milestone</NoMilestoneStyle>;
};

export default MilestonePart;
