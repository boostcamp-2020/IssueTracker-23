import React from 'react';
import styled from 'styled-components';

const StyledImageAttacher = styled.button`
  border: none;
  border-radius: none;
  border-top: 1px dashed #ccc;
  padding: 5px 10px;
  height: 30px;
  text-align: left;
  vertical-align: middle;
  color: #555;
`;

const ImageAttacher = () => (
  <StyledImageAttacher>Attach files by selecting here.</StyledImageAttacher>
);

ImageAttacher.defaultProps = {};

export default ImageAttacher;
