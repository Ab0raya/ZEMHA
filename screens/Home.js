import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "../themes/ThemeProvider";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BotsList from "../components/BotsList";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.areaStyle}>
      <View style={styles.center}>
        <Text
          style={{
            ...FONTS.h5,
            color: "#407BFF",
          }}
        >
          ZEMHA
        </Text>
        <BotsList />
        <View style={styles.bottomNavBar}>
          <TouchableOpacity
            style={styles.bottomNavBarIcon}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={{ alignItems: "center" }}>
              <Image source={require("../assets/icons/BotIcon.png")} />
              <Text style={{ color: "#407BFF", fontWeight: "bold" }}>
                Ai bots
              </Text>
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
            onPress={() => navigation.navigate("Docs")}
          >
            <View style={{ alignItems: "center" }}>
              <Image source={require("../assets/icons/other.png")} />
              <Text>S2T</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  bottomNavBar: {
    elevation: 15,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 15,
    marginTop: 720,
  },
  bottomNavBarIcon: {
    marginHorizontal: 50,
  },
});
export default Home;
