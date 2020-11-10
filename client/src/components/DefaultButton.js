import styled from 'styled-components';

const defaultButtonColor = '#fafbfc';
const defaultButtonTextColor = 'black';
const defaultBorderColor = '#d1d5da';

const DefaultButton = styled.button`
  padding: 5px 16px;
  border: 1px solid ${(props) => props.borderColor || defaultBorderColor};
  border-radius: 6px;
  background-color: ${(props) => props.buttonColor || defaultButtonColor};
  font-weight: 500;
  font-color: ${(props) => props.buttonTextColor || defaultButtonTextColor};
`;

export default DefaultButton;
