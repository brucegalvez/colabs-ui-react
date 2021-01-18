import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';

const StyledLottieIcon = styled.div`
  > span {
    outline: none;
  }
`;

const LottieIcon = ({ animationData, renders }) => {
  const iconAnim = useRef(null);
  const animObject = useRef(null);

  useEffect(() => {
    animObject.current = lottie.loadAnimation({
      container: iconAnim.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
    });
  }, []);

  useEffect(() => {
    animObject.current.goToAndPlay(0);
  }, [renders]);

  return (
    <StyledLottieIcon>
      <span ref={iconAnim} />
    </StyledLottieIcon>
  );
};

LottieIcon.propTypes = {
  animationData: PropTypes.element.isRequired,
  renders: PropTypes.number.isRequired,
};

LottieIcon.defaultProps = {};

export default LottieIcon;
