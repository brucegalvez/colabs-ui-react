import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonBase from '../ButtonBase/ButtonBase';

const StyledButton = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  padding: 0 1rem;
  font-family: ${({ theme }) => theme.font.main.regular};
  flex-direction: ${({ iconPos }) =>
    iconPos === 'left' ? 'row' : 'row-reverse'};
  background: ${({ color }) => (color === 'primary' ? 'white' : color)};
  color: ${({ color }) => (color === 'primary' ? 'black' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  > .icon {
    margin-right: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > * {
      stroke: ${({ theme }) => theme.color.primary.main};
      ${({ disable }) => (disable ? 'stroke: #a6a6a6;' : '')}
      height: 1.5rem;
      width: 1.5rem;
    }
  }
  > .text {
    width: fit-content;
  }
  > input {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0%;
  }
`;

/**
 * The only true Button component
 */

const Button = ({
  text,
  icon,
  handleClick,
  color,
  iconPos,
  fullWidth,
  disable,
  size,
  type,
}) => {
  return (
    <ButtonBase
      onClick={disable ? '' : handleClick}
      disable={disable}
      size={size}
      fullWidth={fullWidth}
    >
      <StyledButton color={color} iconPos={iconPos} className="cui-button">
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
        {type === 'submit' ? (
          <input type="submit" value="Submit" id="submit" />
        ) : null}
      </StyledButton>
    </ButtonBase>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  iconPos: PropTypes.oneOf(['right', 'left']),
  icon: PropTypes.element,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  ...ButtonBase.propTypes,
};

Button.defaultProps = {
  type: null,
  color: 'primary',
  text: 'button',
  icon: null,
  iconPos: 'left',
  ...ButtonBase.defaultProps,
};

export default Button;
