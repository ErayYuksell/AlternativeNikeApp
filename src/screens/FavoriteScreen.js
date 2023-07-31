import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cart from "../data/cart.js";
import { ThemedButton } from "react-native-really-awesome-button";
import AwesomeButton from "react-native-really-awesome-button";
//https://github.com/rcaferati/react-native-really-awesome-button
import { Entypo } from "@expo/vector-icons";

const footComponent = () => {
  return (
    <AwesomeButton
      style={styles.awesomeButton}
      backgroundActive="gray"
      backgroundColor="black"
      borderRadius={25}
    >
      <Text style={styles.awesomeButtonText}>
        Clear all your favorite products
      </Text>
    </AwesomeButton>
  );
};
export default FavoriteScreen = () => {
  const buttonScale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        ListFooterComponent={footComponent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.product.image }}
                style={styles.image}
              />

              <View style={styles.contentContainer}>
                <Text style={styles.name}>{item.product.name}</Text>
                <Text style={styles.size}>Size: {item.size}</Text>

                <Pressable
                  style={styles.footer}
                  onPressIn={onPressIn}
                  onPressOut={onPressOut}
                >
                  <Animated.View
                    style={{ transform: [{ scale: buttonScale }] }}
                  >
                    <Entypo name="trash" size={27} color="#fe8781" />
                  </Animated.View>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 ,paddingTop:55},
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "gray",
    marginBottom: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: { width: "50%", aspectRatio: 1, borderRadius: 35 },
  contentContainer: { paddingHorizontal: 10, paddingTop: 5 },
  name: { fontSize: 18, fontWeight: "bold" },
  size: { opacity: 0.5, paddingTop: 5 },
  footer: { marginTop: 126, marginLeft: 147 },
  awesomeButton: { alignSelf: "center", marginTop: 20 },
  awesomeButtonText: { fontSize: 16, fontWeight: "bold", color: "white" },
});
