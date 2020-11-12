import React, { useState } from 'react';
import styled from 'styled-components';
import DescriptionEditor from './DescriptionEditor.jsx';
import EditorNavbar from './EditorNavbar.jsx';
import EditorButtonWrapper from './EditorButtonWrapper.jsx';
import TitleEditor from './TitleEditor.jsx';

const StyledEditorWrapper = styled.div`
  // margin: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: max-content;
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

const UserProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
`;

const EditorWrapper = ({
  width,
  height,
  padding,
  hasTitle,
  onClickCancel,
  onClickPost,
  host,
}) => {
  const [postable, setPostable] = useState(true);

  return (
    <BubbleWrapper>
      <UserProfile
        src={
          'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
        }
      />
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
  width: 600,
  height: 200,
  padding: 10,
  hasTitle: true,
};

export default EditorWrapper;
