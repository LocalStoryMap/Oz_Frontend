import * as React from 'react';
import { IconProps } from '@components/icons/iconProps';

const SvgMoreThan = ({
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
    <path fill="url(#More_Than_svg__a)" d="M0 0h16v16H0z" />
    <defs>
      <pattern
        id="More_Than_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#More_Than_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nO3dPWsUQRzH8e/6gBctfCjWoOAbWBTtfAV3TfRliDZ6XcBWtBexsPU1WASsLcRnjCIiIiIKByZVQhqzcjDFKTmzl/vPf3bc3wemvpk/x/xuZnbnQERERERE2mw/cCB1J/5Xx4DbwCegBjaBp8AVFd3OWeBrKHC9Q3sLnDP8vE46Dnz7R5Hr0LaAIVCk7nCu7jQocj3RVoDF1J3O0ecZC10DI2ApdcdzcngPRa4n2kPgSOpB5ODQnIWugVUFZTMfDIq9paDc3U2DQtcKymbz9DvDYo8UlNOdAd4YFnsbuA8sNJy+OqUH3A1Fsir4e+BC6oG1VR/4bljscVAuA/tSD6yNSuCRYbHH7TFwKvXA2qgIO3cbxkF5OfXA2qoyDspx04pyCgWls76C0k+poPRTKCh9VQpKPz2tKH31FZR+SgWln0JB6atSUPrpKSh99RWUfkoFpZ9CQemrUlD6WQgHuJZnlC+Bk45jyMqlcPJiVeznwMHUg2qrxfCUqlWxr6UeUNuDchhOzect9JPUg+lKUK6nHkRXCr2WehBtVmjqyC8Mrzr0ma7/vHum1/XiL1heaMHyJy3BnTaVNg2/xaMw/UigbVIHA23853mUdT5yv7NSac85rkKBF1+pc0GfwPthOBfrJaO/KPAcVAq8uAoFXnylAi++gQIvrp5WePFVCrz4gXfD6PhfW5pTlAq8+AYKvLgUeA7G92i8MpyLt3XVz86XV300Drwlj29Hbm4ZFnlF95ZO/wn3RVua8Z3QGZ7fM28KPKepYy/PvY300MrsHijwfJwGfjY8wxvq6vn5XNyl2Ku6I9p2I+nexB8r/AJeA9f1Olk8R3WlvIiIiIiIMIPfVbYzopqJUkkAAAAASUVORK5CYII="
        id="More_Than_svg__b"
        width={90}
        height={90}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgMoreThan;
