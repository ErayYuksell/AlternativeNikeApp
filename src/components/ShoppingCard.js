import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import cart from "../data/cart";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
export default ShoppingScreen = ({ cardItem }) => {
  return (

      <ScrollView
        automaticallyAdjustsScrollIndicatorInsets={true}
        scrollEnabled={false}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: cardItem.product.image }}
          />
          <View style={styles.contentWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.name}>{cardItem.product.name}</Text>
              <Text style={styles.size}>Size: {cardItem.size}</Text>
            </View>

            <View style={styles.buttonWrapper}>
              <View style={styles.button}>
                <TouchableOpacity>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.buttonText}>1</Text>
                <TouchableOpacity>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Text>${cardItem.product.price}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
   

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    paddingBottom: 15,
  },
  image: { width: 150, aspectRatio: 1 },
  contentWrapper: {
    justifyContent: "space-between",
    width: 250,
  },
  titleWrapper: { paddingHorizontal: 10, paddingVertical: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  size: { fontSize: 15, opacity: 0.5 },
  buttonWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: { flexDirection: "row" },
  buttonText: { paddingHorizontal: 7, fontSize: 16, alignSelf: "center" },
});
