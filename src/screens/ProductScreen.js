import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
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
          </TouchableOpacity>
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
});

export default ProductScreen;
