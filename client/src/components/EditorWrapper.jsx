/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styled from 'styled-components';
import UserProfileUrl from '@Components/UserProfileUrl.jsx';
import DescriptionEditor from './DescriptionEditor.jsx';
import TitleEditor from './TitleEditor.jsx';
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
  const [postable, setPostable] = useState(true);
  // UserProfileImage에는 author가 아니라 현재 로그인 유저가 들어가야함
  console.log(props);
  return (
    <BubbleWrapper>
      <UserProfileUrl author={props.value.author} />
      <BubbleTail />
      <StyledEditorWrapper width={props.width}>
        {props.title && <TitleEditor setPostable={setPostable} />}
        <EditorNavbar />
        <DescriptionEditor
          width={props.width - 2 * props.padding}
          height={props.height - 2 * props.padding}
        />
        <EditorButtonWrapper onClick={props.onClick} postable={postable} />
      </StyledEditorWrapper>
    </BubbleWrapper>
  );
};

EditorWrapper.defaultProps = {
  width: 600,
  height: 200,
  padding: 10,
  title: true,
};

export default EditorWrapper;
