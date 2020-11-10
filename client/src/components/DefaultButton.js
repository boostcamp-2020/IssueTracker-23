import styled from 'styled-components';

const defaultBackgroundColor = '#fafbfc';
const defaultTextColor = 'black';
const defaultBorderColor = '#d1d5da';

const DefaultButton = styled.button`
  padding: 5px 16px;
  border: 1px solid ${(props) => props.borderColor || defaultBorderColor};
  border-radius: 6px;
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
  font-weight: 500;
  color: ${(props) => props.textColor || defaultTextColor};
  cursor: pointer;
  white-space: nowrap;
`;

export default DefaultButton;
