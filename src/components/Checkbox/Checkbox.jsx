import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  .checkbox {
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.75rem;
    input {
      position: absolute;
      cursor: pointer;
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 0.25rem;
    }
    .checkmark {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      height: 1.5rem;
      width: 1.5rem;
      background-color: #fff;
      border-radius: 0.25rem;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    }
    input:checked ~ .checkmark {
      background-color: #1171fa;
    }
  }
  label {
    font-family: ${(props) => props.theme.font.main.regular};
    font-size: 1rem;
  }
`;

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <StyledCheckbox>
      <div className="checkbox">
        <span className="checkmark" />
        <input
          checked={checked}
          className="checkbox"
          type="checkbox"
          onChange={onChange}
        />
      </div>
      <label htmlFor={label} className="label">
        {label}
      </label>
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: '',
  checked: false,
};

export default Checkbox;
