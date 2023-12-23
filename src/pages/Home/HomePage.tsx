import React from "react"
import { ScrollView, StatusBar } from "react-native"
import { StyledContainer } from "../../components/theme/StyledComponent"
import Watchlist from "./Wacthlist"
import InvestingSection from "./InvestingSection"
import BuyingSection from "./BuyingSection"
import TopMoversSection from "./TopMoversSection"
import { ThemeColors } from "../../components/theme/ThemeColors"



const HomePage: React.FC = () => {

 return <StyledContainer>
  <StatusBar backgroundColor={ThemeColors.darkGray}  />  
      <InvestingSection />
      <BuyingSection />
      <Watchlist />
      <TopMoversSection />
 </StyledContainer>
}

export default HomePage