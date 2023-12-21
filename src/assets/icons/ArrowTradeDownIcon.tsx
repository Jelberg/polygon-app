import React from 'react';
import Svg, {Polygon} from 'react-native-svg';
import {ISVGComponent} from './icons';

const ArrowTradeDownIcon: React.FC<ISVGComponent> = ({
  width = 22,
  height = 22,
  color = 'red',
}) => (
  <Svg width={width} height={height} viewBox="0 0 230.453 230.453" fill={color}>
    <Polygon
      points="177.169,43.534 177.169,58.534 204.845,58.534 135.896,127.479 92.36,83.947 0,176.312 10.606,186.918 
	92.361,105.16 135.896,148.691 215.453,69.14 215.453,96.784 230.453,96.784 230.453,43.534 "
      transform="scale(1, -1) translate(0, -230.453)"
    />
  </Svg>
);

export default ArrowTradeDownIcon;