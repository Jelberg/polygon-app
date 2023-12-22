import styled from 'styled-components/native';
import { ThemeColors } from './ThemeColors';

export enum EnumVariantFont {
    caption = 'caption',
    caption2 = 'caption2',
    numred = 'numred',
    numgreen = 'numgreen',
    title = 'title',
    body = 'body',
    h3 = 'h3',
    h2 = 'h2',
    h1 = 'h1',
    largeTitle = 'largeTitle',
  }


  interface ISTYLES_FONT {
    [key: string]: {
      fontSize: string;
      fontWeight: string;
      letterSpacing: string;
      color: string;
    };
  }

export const STYLES_FONT: ISTYLES_FONT = {
    [EnumVariantFont.caption]: {
        fontSize: '15px',
        fontWeight: 'medium',
        letterSpacing: '1px',
        color: ThemeColors.ligthGray
      },
      [EnumVariantFont.caption2]: {
        fontSize: '15px',
        fontWeight: 'bold',
        letterSpacing: '1.2px',
        color: 'white'
      },
      [EnumVariantFont.numred]: {
        fontSize: '15px',
        fontWeight: 'medium',
        letterSpacing: '1.2px',
        color: ThemeColors.red
      },
      [EnumVariantFont.numgreen]: {
        fontSize: '15px',
        fontWeight: 'medium',
        letterSpacing: '1.2px',
        color: ThemeColors.green
      },
    [EnumVariantFont.title]: {
        fontSize: '15px',
        fontWeight: 'bold',
        letterSpacing: '1.6px',
        color: ThemeColors.ligthGray
      },
    [EnumVariantFont.body]: {
      fontSize: '18px',
      fontWeight: 'regular',
      letterSpacing: '1px',
      color: 'white'
    },
    [EnumVariantFont.h3]: {
      fontSize: '19px',
      fontWeight: 'regular',
      letterSpacing: '1px',
      color: 'white'
    },
    [EnumVariantFont.h2]: {
      fontSize: '20px',
      fontWeight: 'regular',
      letterSpacing: '1px',
      color: 'white'
    },
    [EnumVariantFont.h1]: {
      fontSize: '21px',
      fontWeight: 'regular',
      letterSpacing: '1px',
      color: 'white'
    },
    [EnumVariantFont.largeTitle]: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
        color: 'white'
      }
}

export const Text = styled.Text`
  color: ${(props) => STYLES_FONT[props.theme.variant ?? 'body'].color};
  font-weight: ${(props) => STYLES_FONT[props.theme.variant ?? 'body'].fontWeight};
  font-size: ${(props) => STYLES_FONT[props.theme.variant ?? 'body'].fontSize};
  letter-spacing: ${(props) => STYLES_FONT[props.theme.variant ?? 'body'].letterSpacing};
`;
