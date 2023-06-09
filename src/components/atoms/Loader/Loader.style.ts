import styled from 'styled-components'

export const LoaderWrapper = styled.div<{ size: string }>`
  .ring {
    --uib-color: ${({ theme }) => theme.color.black10};
    --uib-size: ${({ size }) => size};
    --uib-speed: 2s;

    animation: rotate var(--uib-speed) linear infinite;
    height: var(--uib-size);
    transform-origin: center;
    vertical-align: middle;
    width: var(--uib-size);
  }

  .ring circle {
    animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes stretch {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -124px;
    }
  }
`
