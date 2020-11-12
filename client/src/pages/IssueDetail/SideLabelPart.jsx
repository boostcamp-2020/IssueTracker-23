/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import CommonSidePart from '@Components/CommonSidePart.jsx';
import LabelPart from '@Components/LabelInDetail.jsx';
import styled from 'styled-components';

const NoLabelStyle = styled.div`
  padding: 4px;
  font-size: 14px;
`;
const LabelListStyle = styled.div`
  padding: 4px;
  width: 100%;
  min-height: 75px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid gray;
`;

const SideLabelPart = ({ setIssueData }) => {
  const [labelList, setLabelList] = useState([]); // 여기에 갖고 있는 라벨 받아오기

  const clickItmeHandler = (clickedItem) => {
    const clickedIndex = labelList.findIndex(
      (elem) => elem.id === clickedItem.id
    );
    const newList = [...labelList];
    if (clickedIndex !== -1) {
      newList.splice(clickedIndex, 1);
    } else {
      newList.push(clickedItem);
    }
    setLabelList(newList);
  };

  useEffect(() => {
    setIssueData((prevIssueData) => {
      return { ...prevIssueData, labels: labelList.map((label) => label.id) };
    });
  }, [labelList, setIssueData]);

  return (
    <div>
      <CommonSidePart
        onClick={clickItmeHandler}
        title="Labels"
        valueAsTitle={[
          {
            id: 1,
            name: 'label1',
            color: '#adffdd',
            description: 'this is label1',
          },
          {
            id: 2,
            name: 'label2',
            color: '#f5ffb5',
            description: 'this is label2',
          },
          {
            id: 3,
            name: 'label3',
            color: '#f5cbae',
            description: 'this is label3',
          },
        ]}
      />
      <LabelListStyle>
        {labelList.length === 0 ? (
          <NoLabelStyle>No Labels</NoLabelStyle>
        ) : (
          labelList.map((elem, index) => {
            return <LabelPart key={index} value={elem} />;
          })
        )}
      </LabelListStyle>
    </div>
  );
};

export default SideLabelPart;
