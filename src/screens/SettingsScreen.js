import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default SettingsScreen = () => {
  return (
    <ImageBackground
      source={require("../data/images/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg")}
      style={styles.container}
    >
      <ScrollView automaticallyAdjustsScrollIndicatorInsets={true}>
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.photo}>
            <Ionicons name="person" size={60} color="black" />
          </View>
          <Text style={styles.title}>Eray Yüksel</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Profili Düzenle</Text>
          </TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Pressable style={styles.icon}>
              <Entypo name="box" size={30} color="black" />
              <Text style={styles.iconText}>Siparişler</Text>
            </Pressable>

            <Pressable style={styles.icon}>
              <Entypo name="credit-card" size={30} color="black" />
              <Text style={styles.iconText}>Kart</Text>
            </Pressable>
            <Pressable style={styles.icon}>
              <MaterialIcons name="event-note" size={30} color="black" />
              <Text style={styles.iconText}>Etkinlikler</Text>
            </Pressable>
            <Pressable style={styles.icon}>
              <Ionicons name="settings" size={30} color="black" />
              <Text style={styles.iconText}>Ayarlar</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 ,},
  contentContainer: { alignItems: "center", justifyContent: "center", flex: 1 },
  photo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  title: {
    paddingTop: 15,
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
  },
  button: {
    width: 180,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginTop: 25,
  },
  buttonText: { paddingVertical: 5, fontSize: 16, fontWeight: "bold" },
  iconWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  icon: { alignItems: "center", justifyContent: "center" },
  iconText: { color: "black", paddingTop: 7, fontSize: 16, fontWeight: "bold" },
});
