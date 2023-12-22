import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../assets/icons/HomeIcon";
import MarketsIcon from "../assets/icons/MarketsIcon";
import MoreIcon from "../assets/icons/MoreIcon";
import ConvertIcon from "../assets/icons/ConvertIcon";
import PortfolioIcon from "../assets/icons/PortfolioIcon";

import HomePage from "../pages/Home/Home";
import MorePage from "../pages/More";
import PortfolioPage from "../pages/Portfolio";
import MarketsPage from "../pages/Markets";
import ConvertPage from "../pages/Convert";
import { ThemeColors } from "../components/theme/ThemeColors";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator 
    initialRouteName="Home" 
    screenOptions={{
      tabBarStyle: {
        backgroundColor: ThemeColors.gray,
        padding:10,
        paddingBottom:2
      }
    }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color}/>
          ),
          tabBarActiveTintColor: ThemeColors.primary,
          tabBarInactiveTintColor: ThemeColors.ligthGray,
          
        }}
      />
      <Tab.Screen
        name="Markets"
        component={MarketsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MarketsIcon color={color}/>
          ),
          tabBarActiveTintColor: ThemeColors.primary,
          tabBarInactiveTintColor: ThemeColors.ligthGray,
        }}
      />
      <Tab.Screen
        name="Convert"
        component={ConvertPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <ConvertIcon color={color}  />
          ),
          tabBarActiveTintColor: ThemeColors.primary,
          tabBarInactiveTintColor: ThemeColors.ligthGray,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <PortfolioIcon color={color}  />
          ),
          tabBarActiveTintColor: ThemeColors.primary,
          tabBarInactiveTintColor: ThemeColors.ligthGray,
        }}
      />
      <Tab.Screen
        name="More"
        component={MorePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MoreIcon color={color}  />
          ),
          tabBarActiveTintColor: ThemeColors.primary,
          tabBarInactiveTintColor: ThemeColors.ligthGray,
        }}
      />
    </Tab.Navigator>
  );
}


