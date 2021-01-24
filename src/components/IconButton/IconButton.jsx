import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonBase from '../ButtonBase/ButtonBase';
import defaultTheme from '../../defaultTheme';

const StyledIconButton = styled.span`
  width: 2rem;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: ${({ theme, variant }) =>
    variant === 'primary' ? 'white' : theme.color.primary.main};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.color.primary.main : 'white'};
  ${({ color }) => (color ? `background: ${color}; color: white;` : '')}
  width: ${({ size }) => (size === 'lg' ? '3rem' : '2.25rem')};
  > * {
    /* fill: url(#linearGradient); */
    /* color: red; */
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const IconButton = ({ children, onClick, color, size, variant }) => {
  return (
    <ButtonBase size={size} onClick={onClick}>
      <StyledIconButton
        color={color}
        size={size}
        variant={variant}
        className="cui-icon-button"
      >
        {children}
      </StyledIconButton>
    </ButtonBase>
  );
};

StyledIconButton.defaultProps = { theme: defaultTheme };

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.string,
  ...ButtonBase.propTypes,
};

IconButton.defaultProps = {
  variant: 'primary',
  color: null,
  ...ButtonBase.defaultProps,
};

export default IconButton;
