import React from 'react';
import styled from 'styled-components';

const DescriptionBodyStyle = styled.div`
  border: 1px solid black;
  border-top: transparent;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding: 12px 20px;
  word-break: keep-all;
`;

const DescriptionBody = (props) => {
  return <DescriptionBodyStyle>{props.value.description}</DescriptionBodyStyle>;
};

export default DescriptionBody;
