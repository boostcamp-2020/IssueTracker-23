import React from 'react';
import styled, { css } from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid;
  border-color: #d1d5da;
  display: block;
  padding-left: 0;
  ${(props) =>
    css`
      border-radius: ${props.borderRadius};
    `}
`;
const ListConetentContainer = styled.ul`
  padding: 0;
  margin: 0;
`;
const ListBoxContainer = styled.li`
  display: flex;
  list-style: none;
  border-top: 1px solid;
  border-color: #d1d5da;
`;

const List = (props) => {
  const contentList = () =>
    props.content.map((content, i) => (
      <ListBoxContainer key={i}>{content}</ListBoxContainer>
    ));

  return (
    <ListContainer borderRadius={props.borderRadius}>
      {props.header}
      <ListConetentContainer>
        {props.content ? contentList() : props.emptyComponent}
      </ListConetentContainer>
    </ListContainer>
  );
};

export default List;
