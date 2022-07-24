import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import { ColorSchemeName } from "react-native"

import MapScreen from "@screens/MapScreen"

import linking from "./linking"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Map"
      component={MapScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer
    linking={linking}
    theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
)

export default Navigation
