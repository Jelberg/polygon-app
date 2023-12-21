import React, {ReactNode} from 'react';
import {ThemeProvider} from './context/ThemeContext';
import { StyledContainer} from './components/theme/StyledComponent';

interface IProviders {
  children: ReactNode;
}

const Providers: React.FC<IProviders> = ({children}) => {

  return (
    <ThemeProvider>
      <StyledContainer>
      {children}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Providers;
