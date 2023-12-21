import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISVGComponent} from './icons';

const PlusIcon: React.FC<ISVGComponent> = ({
  width = 22,
  height = 22,
  color = 'white',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <Path
      id="primary"
      d="M5,12H19M12,5V19"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}></Path>
  </Svg>
);

export default PlusIcon;
