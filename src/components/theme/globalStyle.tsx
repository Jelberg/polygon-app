import {createGlobalStyle} from 'styled-components';
import 'styled-components';
import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    bg: '#ffffff',
    text: '#000000',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    bg: '#1a1a1a',
    text: '#ffffff',
  },
};

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  body {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    // Otros estilos globales según sea necesario
  }
`;
