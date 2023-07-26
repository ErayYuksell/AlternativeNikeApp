import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export default SoppingScreenFoot = () => {
  return (
    <View style={styles.footContainer}>
      <View style={styles.footTextWrapper}>
        <Text style={styles.footText}>Subtotal</Text>
        <Text style={styles.footText}>410 US$</Text>
      </View>
      <View style={styles.footTextWrapper}>
        <Text style={styles.footText}>Delivery</Text>
        <Text style={styles.footText}>10 US$</Text>
      </View>
      <View style={styles.footTextWrapper}>
        <Text style={[styles.footText, { fontWeight: "bold", opacity: 1 }]}>
          Total
        </Text>
        <Text style={[styles.footText, { fontWeight: "bold", opacity: 1 }]}>
          420 US$
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footContainer: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  footTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  footText: { fontSize: 16, opacity: 0.5 },
  
});
