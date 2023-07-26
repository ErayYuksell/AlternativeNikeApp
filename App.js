// In App.js in a new project

import * as React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingScreen from "./src/screens/ShoppingScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./src/store";
const Stack = createNativeStackNavigator();

const HeaderRight = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Shop")}>
      <FontAwesome name="shopping-cart" size={24} color="black" />
    </Pressable>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ProductScreen}
            options={({ navigation }) => ({
              //* navigation prop'unu options içinde kullanalım
              headerRight: () => <HeaderRight navigation={navigation} />, //* HeaderRight bileşenine navigation prop'unu geçirelim
            })}
          />
          <Stack.Screen
            name="Details"
            component={ProductDetailsScreen}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen name="Shop" component={ShoppingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
