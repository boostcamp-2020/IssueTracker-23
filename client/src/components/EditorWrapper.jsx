/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import UserProfileUrl from '@Components/UserProfileUrl.jsx';
import DescriptionEditor from './DescriptionEditor.jsx';
import EditorNavbar from './EditorNavbar.jsx';
import EditorButtonWrapper from './EditorButtonWrapper.jsx';

const StyledEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  width: 100%;
`;

const BubbleTail = styled.div`
  position: relative;
  top: 25px;
  left: 5px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border: 1px solid #ccc;
  border-top: none;
  border-right: none;
  background-color: white;
`;

const BubbleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const EditorWrapper = (props) => {
  // UserProfileImage에는 author가 아니라 현재 로그인 유저가 들어가야함
  return (
    <BubbleWrapper>
      <UserProfileUrl author={props.value.author} />
      <BubbleTail />
      <StyledEditorWrapper>
        <EditorNavbar value={props} />
        <DescriptionEditor />
        <EditorButtonWrapper />
      </StyledEditorWrapper>
    </BubbleWrapper>
  );
};

EditorWrapper.defaultProps = {
  value: {
    width: 600,
    height: 200,
    padding: 10,
    author: {
      profileUrl:
        'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
    },
  },
};

export default EditorWrapper;
