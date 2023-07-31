import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
import TabNavigator from "./src/TabNavigator";
//SafeAreaView lara dikkat et bazı yerlerde sayfayı alttan kısıtlıyorsun görmüyorsun
export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator></TabNavigator>
    </Provider>
  );
}
