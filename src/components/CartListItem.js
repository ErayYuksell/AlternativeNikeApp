import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const buttonScale = useRef(new Animated.Value(1)).current;

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: -1,
      })
    );
  };
  const onPressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 1.3,
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
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size:{cartItem.size}</Text>

        <View style={styles.footer}>
          <Pressable
            onPress={decreaseQuantity}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
              <Feather name="minus-circle" size={24} color="gray" />
            </Animated.View>
          </Pressable>

          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable
            onPress={increaseQuantity}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
              <Feather name="plus-circle" size={24} color="gray" />
            </Animated.View>
          </Pressable>

          <Text style={styles.itemTotal}>
            $ {cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;
