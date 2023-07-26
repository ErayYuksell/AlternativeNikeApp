import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import cart from "../data/cart";
import ShoppingCard from "../components/ShoppingCard";
import { Dimensions } from "react-native";
import ShoppingScreenFoot from "../components/ShoppingScreenFoot";

const windowHeight = Dimensions.get("window").height;
export default ShoppingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <ShoppingCard cardItem={item}></ShoppingCard>}
        ListFooterComponent={<ShoppingScreenFoot></ShoppingScreenFoot>}
      />
      <Pressable style={styles.checkButton}>
        <Text style={styles.checkButtonText}>Checkout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  checkButton: {
    width: "80%",
    backgroundColor: "black",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: windowHeight,
    borderRadius: 100,
  },
  checkButtonText: { paddingVertical: 20, color: "white", fontSize: 16 },
});
