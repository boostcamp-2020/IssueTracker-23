import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: ${(props) =>
    props.border === 'none' ? 'none' : `1px solid ${props.border}`};
  background: ${(props) =>
    props.transparent ? 'transparent' : props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  font-weight: ${(props) => props.fontWeight};
  white-space: nowrap;

  &.small {
    padding: 4px 12px;
    font-size: 11px;
  }

  &.normal {
    padding: 5px 16px;
  }

  &.big {
    padding: 6px 20px;
    font-size: 17px;
  }

  &:hover {
    background: ${(props) => darken(0.1, props.background)};
    transition: 0.5s;
  }
`;

const Button = ({
  children,
  color = 'black',
  border = 'black',
  background = 'white',
  transparent = false,
  size = 'normal',
  fontWeight = 500,
  className,
  onClick,
}) => {
  const classNames = [size, className];
  const commonProps = {
    color,
    border,
    background,
    transparent,
    fontWeight,
  };

  return (
    <StyledButton
      {...commonProps}
      className={classNames.join(' ')}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
