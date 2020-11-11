import React from 'react';
import styled from 'styled-components';

const DescriptionHeaderStyle = styled.div`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  font-size: 15px;
  line-height: 15px;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background-color: rgb(207, 207, 207);
  div {
    margin: auto;
  }
`;
const TimelineStyle = styled.div`
  width: 75%;
`;
const IsOwnerStyle = styled.div`
  padding: 4px;
  width: 10%;
  text-align: center;
  border: 1px solid black;
  border-radius: 1em;
`;
const EditBtnStyle = styled.button`
  padding: 4px;
  width: 7%;
  outline: none;
  border-style: none;
  background-color: rgb(207, 207, 207);
  cursor: pointer;
  :hover {
    border-radius: 1em;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.19);
  }
`;

const DescriptionHeader = (props) => {
  const issueInfo = props.value;
  const IsOwner = () => {
    if (props.isOwner) return <IsOwnerStyle>owner</IsOwnerStyle>;
    return <IsOwnerStyle style={{ visibility: 'hidden' }}>owner</IsOwnerStyle>;
  };
  console.log(issueInfo, props.isOwner);
  return (
    <DescriptionHeaderStyle>
      <TimelineStyle>
        {issueInfo.author.userName} Commented at {issueInfo.updatedDate}
      </TimelineStyle>
      <IsOwner />
      <EditBtnStyle>edit</EditBtnStyle>
    </DescriptionHeaderStyle>
  );
};

export default DescriptionHeader;
