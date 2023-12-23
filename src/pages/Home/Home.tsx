import React from "react"
import { ScrollView } from "react-native"
import { StyledContainer } from "../../components/theme/StyledComponent"
import Watchlist from "./Wacthlist"
import InvestingSection from "./InvestingSection"
import BuyingSection from "./BuyingSection"
import TopMoversSection from "./TopMoversSection"


const HomePage: React.FC = () => {
 return <StyledContainer>
   
      <InvestingSection />
      <BuyingSection />
      <Watchlist/>
      <TopMoversSection />
   
 </StyledContainer>
}

export default HomePage