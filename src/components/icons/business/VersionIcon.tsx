import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgVersion = ({
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
    width={width}
    height={height}
    viewBox="0 0 26 24"
    fill={fill}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21.687 11.5c0-4.695-4.09-8.5-9.135-8.5s-9.134 3.805-9.134 8.5S7.507 20 12.552 20M20.902 19.27l1.86 1.73"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M20.9 15.732c1.049.977 1.049 2.56 0 3.536-1.05.976-2.75.976-3.8 0-1.049-.977-1.049-2.56 0-3.536 1.05-.976 2.75-.976 3.8 0M4.371 15.281h.063c3.044 0 5.074-.162 5.074-2.833 0-2.833 3.044-2.833 3.044-4.722 0-2.112-4.06-1.889-4.06-3.778V3.88M21.687 11.5H18.39c-2.262 0-3.463-2.487-1.96-4.061l2.182-2.286"
    />
  </svg>
);
export default SvgVersion;
