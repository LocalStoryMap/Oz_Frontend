import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgComments = ({
  width = 24,
  height = 24,
  fill = 'none',
  stroke,
  strokeWidth,
  ...props
}: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 16 16"
  >
    <path
      fill="url(#Comments_svg__a)"
      d="M0 0h16v16H0z"
      transform="matrix(-1 0 0 1 16 0)"
    />
    <defs>
      <pattern
        id="Comments_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#Comments_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDElEQVR4nO2cO04DQRBENwLEFeAE3GdTlmC7JsFwDQJOgIDj8IkAiSsQEiA2HzQSCZIRv4Eas+9JHXvmuVz2OuiuAwAAAAAAAAAAAIDPMgzDRkQcRsS1pElSntlMkq4kHSwWi/VfSc44jtuS7hq4bG5hIuK2OKmeZCRrqeyqyS514U6Q2p1FTdHXDVwoNzqXNUU/N3Ch3OIUN9VEuy+jxgfRQnR2p5BEyy+O6pBfKh0tRGd34ki0/JKoDvkF0tFqa3hgEaKzO4UkWn5xVIf8UuloITq7E0ei5ZdEdcgvkI5WW8MDixCd3Skk0fKLozrkl0pHC9HZnTgSLb8kqkN+gXS02hoeWITo7E4hiZZfHNUhv1Q6WojO7sSRaPklUR3yC6Sj1dbwwCJEZ3cKSbT84qgO+aXS0UJ0dieORMsvierQDDua7QZ6V3JEPNUUzb4O/cG+jrKsyf3xVKMTEfvVRJe9QWV/kPtSam9u+r5f62pSNmIhW28kp5S2ut+gJLssayq9NMcvyIh4joiLUhfVk1wT/eCS4zjuuc+/Muj7STp3n30Oou8lbbrPvlLo65KnlNKO+9xzED24z7yS6GuSz9znXVlELzcleqKX/0b0UOdtnTH6+PfyqfuM/wLxe9kueqKX64p+WCY6pbRb83VmT0QcLRF9Mnsxten7fu1Vdkn2o6Tjpv9uBADorLwAJl1MkMvCWU0AAAAASUVORK5CYII="
        id="Comments_svg__b"
        width={90}
        height={90}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgComments;
