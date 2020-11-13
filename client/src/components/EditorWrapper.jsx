/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
  ${({ width }) => css`
    width: ${width}%;
  `}
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

const EditorWrapper = ({
  width,
  height,
  padding,
  hasTitle,
  onClickCancel,
  onClickPost,
  host,
  value,
}) => {
  const [postable, setPostable] = useState(true);
  return (
    <BubbleWrapper>
      <UserProfileUrl author={value.author} />
      <BubbleTail />
      <StyledEditorWrapper width={width}>
        {hasTitle && <TitleEditor setPostable={setPostable} />}
        <EditorNavbar />
        <DescriptionEditor
          width={width - 2 * padding}
          height={height - 2 * padding}
          host={host}
        />
        <EditorButtonWrapper
          postable={postable}
          onClickCancel={onClickCancel}
          onClickPost={onClickPost}
        />
      </StyledEditorWrapper>
    </BubbleWrapper>
  );
};

EditorWrapper.defaultProps = {
  width: 75,
  height: 200,
  padding: 10,
  hasTitle: true,
  value: {
    author: {
      profileUrl:
        'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
    },
  },
};

export default EditorWrapper;
