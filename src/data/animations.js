import { css, keyframes } from '@emotion/react';

const opacityKeyFrames = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const opacityAnimation = (time) => (css`animation: ${opacityKeyFrames} ${time} ease`);
