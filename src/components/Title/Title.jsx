import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.span`
  display: flex;
  align-items: baseline;
  ${({ iconPos }) =>
    iconPos === 'right' ? 'flex-direction: row-reverse; justify-content: flex-end;' : ''}
  > :nth-child(1) {
    > * {
      ${({ iconPos }) => (iconPos === 'right' ? 'margin-left: 0.5rem;' : 'margin-right: 0.5rem;')};
      width: fit-content;
      height: fit-content;
      stroke: ${({ theme }) => theme.color.primary.main};
      ${({ size }) => {
        if (size === 'lg') return 'height: 1.75rem; width: 1.75rem;';
        if (size === 'md') return 'height: 1.5rem; width: 1.5rem;';
        if (size === 'sm') return 'height: 1.15rem; width: 1.15rem;';
        return 'height: 0.8rem; width: 0.8rem;';
      }};
    }
  }
  > :nth-child(2) {
    font-family: ${({ size, theme }) => {
      if (size === 'lg') return theme.font.main.bold;
      if (size === 'md') return theme.font.main.medium;
      if (size === 'sm') return theme.font.main.medium;
      return theme.font.main.medium;
    }};
    letter-spacing: -0.025em;
    font-size: ${({ size }) => {
      if (size === 'lg') return '2.25rem';
      if (size === 'md') return '1.85rem';
      if (size === 'sm') return '1.5rem';
      return '1.25rem';
    }};
    margin: ${({ size }) => {
        if (size === 'lg') return '0.5rem';
        if (size === 'md') return '0.5rem';
        if (size === 'sm') return '0.5rem';
        return '0.5rem';
      }}
      0;
    font-weight: normal;
    background: -webkit-linear-gradient(0deg, ${({ theme }) => theme.color.primary.main}, #42b7fc);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Title({ text, icon, headingLevel, size, iconPos }) {
  const HeadingTag = `h${headingLevel}`;
  return (
    <StyledTitle size={size} iconPos={iconPos}>
      <span>{icon}</span>
      <HeadingTag>{text}</HeadingTag>
    </StyledTitle>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  headingLevel: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']).isRequired,
  iconPos: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.elementType,
};

Title.defaultProps = {
  icon: null,
  iconPos: 'left',
};

export default Title;
