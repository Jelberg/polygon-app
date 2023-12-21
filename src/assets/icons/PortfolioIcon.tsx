import React from 'react';
import Svg, {Path, Rect, Circle} from 'react-native-svg';
import {ISVGComponent} from './icons';

const PortfolioIcon: React.FC<ISVGComponent> = ({
  width = 24,
  height = 24,
  color = 'white',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <Path d="M21,11.184V7a1,1,0,0,0-1-1H4A1,1,0,0,1,4,4H20a1,1,0,0,0,0-2H4A3,3,0,0,0,1,5V19a3,3,0,0,0,3,3H20a1,1,0,0,0,1-1V16.816a2.982,2.982,0,0,0,0-5.632ZM19,20H4a1,1,0,0,1-1-1V7.816A2.966,2.966,0,0,0,4,8H19v3H16a3,3,0,0,0,0,6h3Zm1-5H16a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" />
  </Svg>
);

export default PortfolioIcon;
