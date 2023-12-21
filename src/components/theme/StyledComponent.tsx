import styled from 'styled-components/native';
import { useTheme } from '../../context/ThemeContext';

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${() => {
    const theme = useTheme(); 
    return(theme.isDarkMode ? '#111315' : 'white')}};
`;

export const StyledText = styled.Text`
  color: ${() => {
    const theme = useTheme(); 
    return (theme.isDarkMode ? 'white' : 'black')}};
  font-size: 18px;
`;
