import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import BotsList from "../components/BotsList";
import BottomNavBar from "../components/BottomNavBar";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.areaStyle}>
      <ImageBackground
        style={styles.center}
        source={require("../assets/images/background.gif")}
      >
        <Text style={{ ...FONTS.h5, color: "#407BFF" }}>ZEMHA</Text>
        <BotsList />
        <BottomNavBar />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaStyle: {
    flex: 1,
    backgroundColor: "transparent",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
});
export default Home;
