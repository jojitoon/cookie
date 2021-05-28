import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RecipeList from "./src/screens/RecipeList";
import AddRecipe from "./src/screens/AddRecipe";
import Edit from "./src/screens/Edit";
import Profile from "./src/screens/Profile";
import History from "./src/screens/History";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const Stack = createStackNavigator();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://aua3cktr5jbktcczt32tvdnxzm.appsync-api.us-east-2.amazonaws.com/graphql",
  cache: new InMemoryCache(),
  headers: { "x-api-key": "da2-2mbfen7lczer3b6yibh6iy5ipu" },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Profile} />
          <Stack.Screen name="EditRecipe" component={Edit} />
          <Stack.Screen name="AddRecipe" component={AddRecipe} />
          <Stack.Screen name="ViewRecipe" component={RecipeList} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
