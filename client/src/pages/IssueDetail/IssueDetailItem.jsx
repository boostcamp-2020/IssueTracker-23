/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import DescriptionHeader from '@Components/DescriptionHeader.jsx';
import DescriptionBody from '@Components/DescriptionBody.jsx';
import UserProfileUrl from '@Components/UserProfileUrl.jsx';
import styled from 'styled-components';
import DescriptionEditor from '@Components/DescriptionEditor.jsx';
import EditorNavbar from '@Components/EditorNavbar.jsx';
import EditorButtonWrapper from '@Components/EditorButtonWrapper.jsx';

const IssueDetailItemStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditorWrapperStyle = styled.div`
  border-radius: 1em;
  border: 1px solid black;
  width: 100%;
`;

const IssueItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const VerticalLine = styled.div`
  position: relative;
  margin-left: 100px;
  border-left: 1px solid black;
  width: 0;
  height: 50px;
`;

const IssueDetailItem = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const editClickHandler = (isEdit) => {
    setIsEdit(isEdit);
  };

  const editButtonClickHandler = (isEdited) => {
    setIsEdit(!isEdit);
  };

  const ChangingBody = () => {
    if (isEdit)
      return (
        <EditorWrapperStyle>
          <EditorNavbar value={props} />
          <DescriptionEditor />
          <EditorButtonWrapper
            postable={true}
            onClick={editButtonClickHandler}
          />
        </EditorWrapperStyle>
      );
    return (
      <div style={{ width: '100%' }}>
        <DescriptionHeader
          isEdit={isEdit}
          onClick={editClickHandler}
          isOwner={props.isOwner}
          value={props.value}
        />
        <DescriptionBody value={props.value} />
      </div>
    );
  };

  return (
    <IssueDetailItemStyle>
      <IssueItem>
        <UserProfileUrl author={props.value.author} />
        <ChangingBody />
      </IssueItem>
      <VerticalLine />
    </IssueDetailItemStyle>
  );
};

export default IssueDetailItem;
