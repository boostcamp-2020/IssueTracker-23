import React, { useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';

const DEBOUNCE_TIME = 2000;

const StyledTextarea = styled.textarea`
  position: relative;
  border: none;
  padding: 10px;
  background-color: #f7f7f7;
  resize: vertical;
  ${({ hasAttacher, width, height }) => css`
    width: 100%;
    height: ${hasAttacher ? height - 30 : height}px;
  `}
  min-height: 100px;
`;

const Textarea = ({ placeholder, hasAttacher, width, height }) => {
  const debounce = useRef(null);
  const onType = useCallback((e) => {
    if (e.currentTarget.nextSibling.tagName !== 'P') return;
    const counter = e.currentTarget.nextSibling;
    const textarea = e.currentTarget;
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      counter.style.display = 'inline';
      counter.innerText = `${textarea.value.length} characters`;
      setTimeout(() => {
        counter.style.display = 'none';
      }, DEBOUNCE_TIME);
    }, DEBOUNCE_TIME);
  }, []);

  return (
    <StyledTextarea
      placeholder={placeholder}
      hasAttacher={hasAttacher}
      width={width}
      height={height}
      onChange={onType}
      id="textarea"
    />
  );
};

Textarea.defaultProps = {
  placeholder: 'Leave a comment',
  hasAttacher: true,
  width: 600,
  height: 200,
};

export default Textarea;
