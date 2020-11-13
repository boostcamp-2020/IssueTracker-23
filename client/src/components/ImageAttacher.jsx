import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const ImageAttacher = ({ host }) => {
  const fileInput = useRef();

  const onClick = useCallback((e) => {
    if (e.target !== e.currentTarget) return;
    fileInput.current.click();
  }, []);

  const onChange = useCallback(
    (e) => {
      const formData = new FormData();
      const image = e.target.files[0];
      formData.append('image', image);
      const textareaElement =
        fileInput.current.parentNode.parentNode.firstChild;
      const newLine =
        textareaElement.value === '' || textareaElement.value.slice(-1) === '\n'
          ? ''
          : '\n';
      textareaElement.value += `${newLine}![Uploading ${image.name}...]()`;
      return axios
        .post(`${host}/api/image`, formData)
        .then((res) => {
          textareaElement.value = textareaElement.value.replace(
            `![Uploading ${image.name}...]()`,
            `![${image.name}](${res.data.imageUrl})\n`
          );
        })
        .catch((err) => {});
    },
    [host]
  );

  return (
    <StyledImageAttacher onClick={onClick} host={host}>
      <input
        type="file"
        name="image"
        hidden
        onChange={onChange}
        ref={fileInput}
      />
      Attach files by selecting here.
    </StyledImageAttacher>
  );
};

ImageAttacher.defaultProps = {
  host: 'http://101.101.208.162:3000',
};

export default ImageAttacher;
