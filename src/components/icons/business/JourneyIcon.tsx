import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgJourney = ({
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
    <path fill="url(#Journey_svg__a)" d="M0 0h14v14H0z" />
    <defs>
      <pattern
        id="Journey_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#Journey_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2c4U4TQRDH/z4F7QepjY9gKWC0Vt9IqlHhQRQUXgKCsaBvISpPQMFP0Cp8WjLJNmmabu/2ep2d3ZtfMkk/bHJ7/+7d3M7ODKAoiqIoiqLw8ADASwAHAM4BjAAMAfwCsAugyzSPpGkC+AHAZNiJHasUoA3gKofIY6Oxm0UuVGUaAC49RJ4UW1e2B18LiDy2vs+Fqsz6AiKPLZiDJK+9Zz31sIQbMQHsFsAWgBUAdfv7v2PsJ26BHwP4LkAkU4K9n3F/PcfYM06RnwL4K0AgU5KtzrjHumPsNedKTklkI1XoVF4XZsI+zLjPNyFfHa8EiGKWYHdW2Lq1nnWQs8Z+5BB6z3Fx8tCvAdSQ/uddh2Oivx0XJ5Fj4XgBkb9xTfLaMQHpK3kScnyDAiLTtv0RAj92FKSJiZZnvIPGbnAEYfLEB44dn0lSadoQaJ7XxdJXctvznx/Y1RITHQBfrP+hwP8NgJ/266LD9Y/7xGwnHzMNJ3oc8eQ5fXAZPZIK08aE5bGLnQOHeLRbemcdZMNuXe8cY+m9p2Rw7hCPtqZ5YwLkXJQM/jnEo8D4NCuOseTBlQxGHjtAVziRPpOUDP54vDreOsbS0ZaSwb5DPHJ823anRLYzxxl+VpWz6Zbwefcsx3UUAKcxhBNToFkwo2fAFU5MiZZn7PYCwJPQk44VCn0e5RD5EMDD0JNNgfYckddCTy41UjjKigLX4Szlqiklsjsn3WDLbseVkjJHTeI2lFLDkudAMyU7CXU0V/Qs0URswWpYNisqdjOE2E1b02EqZH0E5IUtNzizwX6TuHVDip0SdWk1LKnTk1DDUgVqoUsrqsJ6QtmzIkk1e1YUVcieDY5mzzKg2bNMaPYsE5o9y4RmzzKh2bNMaPYsE5o9y4RmzzKh2bOMaPYsE+KzZ6e7hI2sc9mP8NinJTF7Nm+XsNPI8qVFZc/6dgm7jDCcGDx7tmiXsEFkgfKou4QdIR6i7xLWhmyi6RJWs6vBVX9oIjdxXcK2BYhiSjaRXcIaAoQxJRpbl7B5Qs/K9F9NTOQNCK1h2REgkCnBWLqEFalhqduOB7E6wxvuLmHLqmFZCzX52FikhuUw9OSrkNFzoSXMy69hGWgx/vJrWPqRhUnFMl3DMrKHANTq53noySmKoiiKoqAy3ANWEFboVjGkOQAAAABJRU5ErkJggg=="
        id="Journey_svg__b"
        width={90}
        height={90}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgJourney;
