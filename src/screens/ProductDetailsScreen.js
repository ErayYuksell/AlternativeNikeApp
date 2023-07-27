import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const windowWidth = Dimensions.get("window").width;
const windowHeight = (Dimensions.get("window").height = "93%");

export default ProductDetailsScreen = ({ navigation }) => {
  const product = useSelector((state) => state.products.selectedProduct); //*
  const dispatch = useDispatch();

  const addToCard = () => {
    dispatch(cartSlice.actions.addCartItem({ product: product }));
    // navigation.navigate("Shop");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView automaticallyAdjustsScrollIndicatorInsets={true}>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled //* sayfalama etkin her bir image i sayfa olarak bölüm bölüm geçiş oluyor
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={addToCard}>
        <Text style={styles.buttonText}>Add to Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: { width: windowWidth, aspectRatio: 1 }, //*
  title: {
    fontSize: 34,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  price: { fontSize: 16, paddingHorizontal: 20, paddingBottom: 10 },
  description: { paddingHorizontal: 20, fontSize: 18, lineHeight: 30 },
  button: {
    width: "80%",
    backgroundColor: "black",
    position: "absolute",
    alignSelf: "center",
    top: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  buttonText: { paddingVertical: 15, color: "#fff", fontWeight: 500 },
});
