import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
  color?: string;
};
