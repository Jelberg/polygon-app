import styled from 'styled-components/native';
import { useTheme } from '../../context/ThemeContext';
import { ThemeColors } from './ThemeColors';

//Para el tema generico
export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => {
    const theme = useTheme(); 
    return(theme.isDarkMode ? ThemeColors.darkGray : 'white')}};
`;

export const StyledText = styled.Text`
  color: ${() => {
    const theme = useTheme(); 
    return (theme.isDarkMode ? 'white' : 'black')}};
  font-size: 18px;
`;
