/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import CommonSidePart from '@Components/sideMenu/commonSidePart';
import LabelPart from '@Components/sideMenu/labelPart';
import styled from 'styled-components';

const LabelListStyle = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SideLabelPart = () => {
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
          },
          {
            id: 2,
            name: 'label2',
            color: '#f5ffb5',
          },
          {
            id: 3,
            name: 'label3',
            color: '#f5cbae',
          },
        ]}
      />
      <LabelListStyle>
        {labelList.map((elem) => {
          return <LabelPart key={elem.id} value={elem} />;
        })}
      </LabelListStyle>
    </div>
  );
};

export default SideLabelPart;
