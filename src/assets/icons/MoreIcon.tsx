import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {ISVGComponent} from './icons';

const MoreIcon: React.FC<ISVGComponent> = ({
  width = 24,
  height = 24,
  color = 'white',
}) => (
  <Svg width={width} height={height} viewBox="0 0 210 210" fill={color}>
    <G id="XMLID_27_">
      <Path
        id="XMLID_28_"
        d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z"
      />
      <Path
        id="XMLID_30_"
        d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z"
      />
      <Path
        id="XMLID_71_"
        d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z"
      />
    </G>
  </Svg>
);

export default MoreIcon;
