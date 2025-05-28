import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgOpenBook = ({
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
  >
    <path
      d="M3 5C3 4.44772 3.44772 4 4 4H11C11.5523 4 12 4.44772 12 5V18C12 18.5523 11.5523 19 11 19H4C3.44772 19 3 18.5523 3 18V5Z"
      stroke={stroke ?? '#000'}
      strokeWidth={1.5}
    />
    <path
      d="M21 5C21 4.44772 20.5523 4 20 4H13C12.4477 4 12 4.44772 12 5V18C12 18.5523 12.4477 19 13 19H20C20.5523 19 21 18.5523 21 18V5Z"
      stroke={stroke ?? '#000'}
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgOpenBook;
