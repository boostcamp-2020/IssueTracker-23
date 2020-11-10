import React from 'react';
import styled from 'styled-components';

const MilestonePartStyle = styled.div`
  padding: 4px;
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
    margin: 4px 0 0 0;
  }
`;

const MilestonePart = (props) => {
  const progressWidth =
    (props.value.closedNumber / props.value.totalNumber) * 300 || 0;

  if (progressWidth !== 0)
    return (
      <MilestonePartStyle>
        <div>
          <div style={{ width: progressWidth }}></div>
        </div>
        <p>{props.value.name}</p>
      </MilestonePartStyle>
    );
  return null;
};

export default MilestonePart;
