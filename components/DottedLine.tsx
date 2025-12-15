import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface DottedLineSvgProps {
  width?: number | string;
  color?: string;
  thickness?: number;
  dotSize?: number;
  gap?: number;
}

const DottedLineSvg = ({
  width = '100%',
  color = '#9CA3AF',
  thickness = 2,
  dotSize = 2,
  gap = 4,
}: DottedLineSvgProps) => {
  return (
    <Svg width={width} height={thickness}>
      <Line
        x1="0"
        y1={thickness / 2}
        x2="100%"
        y2={thickness / 2}
        stroke={color}
        strokeWidth={thickness}
        strokeDasharray={`${dotSize},${gap}`}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default DottedLineSvg;
