import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";

import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const windowWidth = Dimensions.get("window").width;
const windowHeight = (Dimensions.get("window").height = "92%");

export default ProductDetailsScreen = ({ navigation }) => {
  const product = useSelector((state) => state.products.selectedProduct); //*
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  // const alertBox = () => {
  //   Alert.alert("Hey there", "Great! Product added to cart", [
  //     {
  //       text: "Ok",
  //       onPress: () => console.log("Görev başarılı asker"),
  //     },
  //   ]);
  // };

  const addToCard = () => {
    dispatch(cartSlice.actions.addCartItem({ product: product }));
    // alertBox();
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent
        animationType="fade"
      >
        <SafeAreaView style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>
              Product added to cart thanks!
            </Text>
            <Image
              source={require("../data/images/nike.png")}
              style={styles.modalButtonImage}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
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
    </View>
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    width: 150,
    height: 140,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 28,
    lineHeight: 25,
  },
  modalButtonImage: { width: 100, height: 100 },
});
