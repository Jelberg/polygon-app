import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WatchlistPage from "../pages/WatchListPage";
import HomePage from "../pages/Home/HomePage";
import { ThemeColors } from "../components/theme/ThemeColors";

const Stack = createNativeStackNavigator();
export default function WatchlistNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false
        }}
       
      />
      <Stack.Screen
        name="watchlist"
        component={WatchlistPage}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
