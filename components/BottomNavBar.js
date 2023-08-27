import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function BottomNavBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity
        style={styles.bottomNavBarIcon}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/icons/BotIcon.png")} />
          <Text style={{ color: "#407BFF", fontWeight: "bold" }}>Ai bots</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomNavBarIcon}
        onPress={() => navigation.navigate("Docs")}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/icons/docs.png")} />
          <Text>DOCS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomNavBarIcon}
        onPress={() => navigation.navigate("ToDo")}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 50 }}
            source={require("../assets/icons/Choice.png")}
          />
          <Text>To-Do</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomNavBar: {
    elevation: 15,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flexDirection: "row",
    borderRadius: 15,
    marginTop: 720,
  },
  bottomNavBarIcon: {
    marginHorizontal: 50,
  },
});
