import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../assets/icons/HomeIcon";
import MarketsIcon from "../assets/icons/MarketsIcon";
import MoreIcon from "../assets/icons/MoreIcon";
import ConvertIcon from "../assets/icons/ConvertIcon";
import PortfolioIcon from "../assets/icons/PortfolioIcon";

import HomePage from "../pages/Home/HomePage";
import MorePage from "../pages/MorePage";
import PortfolioPage from "../pages/PortfolioPage";
import MarketsPage from "../pages/MarketsPage";
import ConvertPage from "../pages/ConvertPage";
import { ThemeColors } from "../components/theme/ThemeColors";

import WatchlistNavigation from "./WatchlistNavigation";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator 
    initialRouteName="HomeNav" 
    screenOptions={{
      tabBarStyle: {
        backgroundColor: ThemeColors.gray,
        padding:10,
        paddingBottom:2
      }
    }}>
      <Tab.Screen
        name="HomeNav"
        component={WatchlistNavigation}
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


