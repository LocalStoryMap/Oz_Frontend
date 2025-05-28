import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgJourney = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  stroke,
  strokeWidth,
  ...props
}: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke ?? '#000'}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4L20 20M4 20L20 4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
export default SvgJourney;
