import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { AntDesign } from "@expo/vector-icons";
const ProductScreen = ({ navigation }) => {
  //   const Card = ({ data }) => {
  //     return (
  //       <TouchableOpacity
  //         style={styles.itemContainer}
  //       >
  //         <Image style={styles.image} source={{ uri: data.image }} />
  //       </TouchableOpacity>
  //     );
  //   };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [favButton, setFavButton] = useState(false);
  const buttonScale = useRef(new Animated.Value(1)).current;
  //https://www.codexpedia.com/react-native/react-native-button-press-animation/
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

  const favButtonAdjusment = () => {
    setFavButton(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id)); //*
              navigation.navigate("Details");
            }}
          >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.price}>${item.price}</Text>

            <Pressable
              style={styles.favButton}
              onPress={favButtonAdjusment}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                {favButton ? (
                  <AntDesign name="heart" size={18} color="black" />
                ) : (
                  <AntDesign name="hearto" size={18} color="black" />
                )}
              </Animated.View>
            </Pressable>
          </Pressable>
        )}
        // renderItem={({ item }) => <Card data={item}></Card>}
        numColumns={2} //*
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: { width: "50%", padding: 3 },
  image: { width: "100%", aspectRatio: 1 }, //*
  name: { fontSize: 18, fontWeight: "bold", padding: 10 },
  type: { fontSize: 15, paddingHorizontal: 10, paddingBottom: 5, opacity: 0.5 },
  price: { fontSize: 15, paddingHorizontal: 10 },
  favButton: {
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    left: 158,
    top: 15,
  },
});

export default ProductScreen;
