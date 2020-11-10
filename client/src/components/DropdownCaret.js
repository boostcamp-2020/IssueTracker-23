import styled from 'styled-components';

const DropdwonCaret = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  margin-left: 4px;
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
`;

export default DropdwonCaret;
