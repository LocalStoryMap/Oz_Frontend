import type { SVGProps } from 'react';
import * as React from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const SvgCalendar = ({
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
    fill={fill}
    viewBox="0 0 18 18"
  >
    <path
      stroke={stroke ?? '#7D848D'}
      strokeWidth={strokeWidth ?? 1.1}
      d="M13.42 4.08H5c-1.26 0-2.281.99-2.281 2.212v6.804c0 1.221 1.02 2.211 2.28 2.211h8.422c1.26 0 2.28-.99 2.28-2.211V6.292c0-1.222-1.02-2.212-2.28-2.212Z"
    />
    <path
      stroke={stroke ?? '#7D848D'}
      strokeLinecap="round"
      strokeWidth={strokeWidth ?? 1.1}
      d="M5.526 2.72V5.1M3.42 7.142H15M13.245 2.72V5.1"
    />
    <path
      fill="#7D848D"
      d="M6.579 10.375c.29 0 .526-.229.526-.51a.52.52 0 0 0-.526-.511.52.52 0 0 0-.527.51c0 .282.236.51.527.51M9.386 10.375c.29 0 .526-.229.526-.51a.52.52 0 0 0-.526-.511.52.52 0 0 0-.527.51c0 .282.236.51.527.51M12.192 10.375c.291 0 .527-.229.527-.51a.52.52 0 0 0-.527-.511.52.52 0 0 0-.526.51c0 .282.236.51.526.51M6.579 13.096c.29 0 .526-.228.526-.51a.52.52 0 0 0-.526-.51.52.52 0 0 0-.527.51c0 .282.236.51.527.51M9.386 13.096c.29 0 .526-.228.526-.51a.52.52 0 0 0-.526-.51.52.52 0 0 0-.527.51c0 .282.236.51.527.51M12.192 13.096c.291 0 .527-.228.527-.51a.52.52 0 0 0-.527-.51.52.52 0 0 0-.526.51c0 .282.236.51.526.51"
    />
  </svg>
);
export default SvgCalendar;
