import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgPicture = ({
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
    viewBox="0 0 14 14"
  >
    <path fill="url(#Picture_svg__a)" d="M0 0h14v14H0z" />
    <defs>
      <pattern
        id="Picture_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#Picture_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcklEQVR4nO3cvWoVQRiA4Rf8iUSxtdDCK9BUGlvvwnswWliolbkEo612Vnof/oCggq1V1MpGFDxWRwZGCQbOzszumd2dvC9MEw7nkIfvfLshsGBmZmZmZmZmZmZmHZ0CbgNvgJ/A0sMyWrwGbgEbfafoAvBBWLqG6320Kp5kkcnCLprssC5cE2QZ7JRAh50sNFkGr0qgfwhN7qAFs+ycZooMhKbO8AiN0Iy9pn4BD4ErwOl4rgJ7wMKJZhDkfeDSiu/75fgaVwf9JnkV8kHs1Ml2R3MYJayL1B4JTfFEh52c2rbQFEOfyYAOr3V1sH7os0Lj6pj62cuY6MdONMXQi3jr1tUW8Ftoek31fgd2QP6c8X7ZLY/QWcT75O14gQznWlwXqZM8KvQX4H6cmL+/wFb82dcJAK/jVId+AmyueP9N4OkEYGYNvZvxObsTwJkl9IOCz7o7AaBZQZcgt4adXU3klrCzW9dOrrGzw93OvZHudrIbA3kI7LHvdrIbC7kP9hTudrJby5uucWdP5W5nltCpk/cROE5ZQ0/2bKFTJ+8FcIKyhpzsWUPPCXv20Klf8+fAMcZbI01Ap2KE6WQk7GagU77mn+hXnzXSFHTX5H2jf6WT3Rz0KoxnDFMJdpPQoTv//bvpLXCO4crFbhY6dBG4AVzv8YfLUNhNQ9co9QKZndCHE7pSQldK6EoJXSmhKyV0pYSulNCtQ3sQejnSIDjRTBTaB6OQjfy9BNpH/VDnUT/heW5e7MgyuFkCvREfMSY2SQbvgJMUFh6aJzZJyOdLkQ9O9k7cP14g+YcbLF7GdVE8yWZmZmZmZmZmZmYcjf4AqsG+dxrrgDAAAAAASUVORK5CYII="
        id="Picture_svg__b"
        width={90}
        height={90}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgPicture;
