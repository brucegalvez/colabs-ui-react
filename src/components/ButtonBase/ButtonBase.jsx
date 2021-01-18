import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonBase = styled.div`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  height: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${({ size }) =>
    size === 'lg'
      ? 'height: 3rem; border-radius: 1.5rem; font-size: 1.1rem;'
      : 'height: 2.25rem; border-radius: 1.125rem; font-size: 0.9rem;'};
  ${({ theme, disable }) => (disable ? theme.elevation.sm : theme.elevation.md)};
  :active {
    ${({ theme, disable }) => (disable ? '' : theme.elevation.sm)};
  }
  ${({ disable }) => (disable ? 'color: #a6a6a6; background: #e0e0e0;' : '')}
`;

const ButtonBase = ({ children, disable, size, onClick, fullWidth }) => {
  return (
    <StyledButtonBase
      disable={disable}
      size={size}
      onClick={disable ? '' : onClick}
      className="cui-button-base"
      fullWidth={fullWidth}
    >
      {children}
    </StyledButtonBase>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.element.isRequired,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  disable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ButtonBase.defaultProps = {
  fullWidth: false,
  size: 'sm',
  disable: false,
};

export default ButtonBase;
