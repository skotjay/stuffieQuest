import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";

import theme from "./src/assets/theme";

import { StuffieProvider } from "./src/context/StuffieContext";

import HomeScreen from "./src/screens/HomeScreen";
import StuffieListScreen from "./src/screens/StuffieListScreen";
import AddStuffieScreen from "./src/screens/AddStuffieScreen";
import StuffieDetailsScreen from "./src/screens/StuffieDetailsScreen";
import EditStuffieScreen from "./src/screens/EditStuffieScreen";
import QuestLogScreen from "./src/screens/QuestLogScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StuffieProvider>
        <NavigationContainer>
          <StatusBar style="auto" />

          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.custom.colors.primary,
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontWeight: "700",
              },
              contentStyle: {
                backgroundColor: theme.custom.colors.background,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Stuffie Quest",
              }}
            />

            <Stack.Screen
              name="StuffieList"
              component={StuffieListScreen}
              options={{
                title: "Collection",
              }}
            />

            <Stack.Screen
              name="AddStuffie"
              component={AddStuffieScreen}
              options={{
                title: "Add Stuffie",
              }}
            />

            <Stack.Screen
              name="StuffieDetails"
              component={StuffieDetailsScreen}
              options={{
                title: "Stuffie Details",
              }}
            />

            <Stack.Screen
              name="EditStuffie"
              component={EditStuffieScreen}
              options={{
                title: "Edit Stuffie",
              }}
            />

            <Stack.Screen
              name="QuestLog"
              component={QuestLogScreen}
              options={{
                title: "Quest Log",
              }}
            />

            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                title: "Favorites",
              }}
            />

            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                title: "Settings",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StuffieProvider>
    </PaperProvider>
  );
}
