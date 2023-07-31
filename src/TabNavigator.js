import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import FavoriteScreen from "./screens/FavoriteScreen";
import SettingsScreen from "./screens/SettingsScreen";
const Tab = createMaterialBottomTabNavigator();
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ height: 80, backgroundColor: "white" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? 28 : 24;
            } else if (route.name === "Favorite") {
              iconName = focused ? "favorite" : "favorite-border";
              size = focused ? 28 : 24;
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
              size = focused ? 28 : 24;
            }
            return (
              <>
                {route.name == "Favorite" ? (
                  <MaterialIcons name={iconName} size={size} color={color} />
                  
                ) : (
                  <Ionicons name={iconName} size={size} color={color} />
                )}
              </>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Navigation}  />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{tabBarBadge:1}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
