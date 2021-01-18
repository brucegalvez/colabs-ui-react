import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTextField = styled.div`
  > label {
    font-family: ${({ theme }) => theme.font.main.light};
    font-size: 0.875rem;
  }
  > span {
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    background: white;
    border-radius: 0.8rem;
    overflow: hidden;
    background: #ffffff 0% 0% no-repeat padding-box;
    ${({ theme }) => theme.elevation.sm}
    display: flex;
    flex-direction: ${({ iconPos }) => (iconPos === 'left' ? 'row' : 'row-reverse')};
    ${({ multiline }) => (multiline ? '' : 'height: 3rem')};
    align-items: center;
    > :nth-child(1) {
      height: 1.25rem;
      padding: 0;
      margin: ${({ iconPos }) => (iconPos === 'left' ? '0 0.5rem 0 0' : '0 0 0 0.5rem')};
    }
    > .input {
      flex: 1;
      width: 100%;
      ${({ multiline }) => (multiline ? 'height: fit-content; margin: 1rem 0;' : 'height: 3rem')};
      resize: none;
      border: 0;
      color: #000;
      font-family: ${({ theme }) => theme.font.main.medium};
      font-size: 1rem;
      letter-spacing: -0.02em;
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.primary.main};
      }
      ::-webkit-scrollbar-track {
        background-color: #f5f5f5;
      }
      :focus {
        outline: none;
      }
    }
  }
`;

function TextField({
  placeholder,
  value,
  setValue,
  icon,
  type,
  iconPos,
  label,
  required,
  minLength,
  maxLength,
  multiline,
  rows,
}) {
  const InputTag = multiline ? 'textarea' : 'input';
  return (
    <StyledTextField iconPos={iconPos} multiline={multiline} rows={rows}>
      {label ? <label>{label}</label> : null}
      <span>
        {icon}
        <InputTag
          className="input"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={setValue ? (e) => setValue(e.target.value) : null}
          autoComplete="off"
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          rows={rows}
        />
      </span>
    </StyledTextField>
  );
}

TextField.propTypes = {
  multiline: PropTypes.bool,
  type: PropTypes.string,
  iconPos: PropTypes.oneOf(['right', 'left']),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  icon: PropTypes.element,
  label: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
};

TextField.defaultProps = {
  rows: 2,
  multiline: false,
  icon: null,
  setValue: null,
  type: 'text',
  iconPos: 'left',
  label: null,
  required: false,
  minLength: 1,
  maxLength: 250,
};

export default TextField;
