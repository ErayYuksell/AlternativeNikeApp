import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import { Pressable, Text } from "react-native";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfSelect } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const App = () => {
  const numberOfItems = useSelector(selectNumberOfSelect);

  return (

      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingScreen} />
      </Stack.Navigator>

  );
};

export default App;
