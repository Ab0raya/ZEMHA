import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import { useTheme } from "../themes/ThemeProvider";
const Welcome = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#9EF2A4" }}>
      <StatusBar style="light" />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            marginBottom: 120,
            ...FONTS.h5,
            color: colors.text,
            marginVertical: 8,
          }}
        >
          Welcome to ZEMHA
        </Text>
        <Image
          source={require("../assets/GIF/welcome.gif")}
          style={{
            height: 400,
            width: 400,
            marginBottom: 22,
          }}
        />

        <Text
          style={{
            ...FONTS.body3,
            color: colors.text,
            marginBottom: 36,
          }}
        >
          Login or create account if you don't have one
        </Text>

        <Button
          title="Log in"
          onPress={() => navigation.navigate("Login")}
          style={{
            width: SIZES.width - 44,
            marginBottom: SIZES.padding,
            backgroundColor: "transparent",
            borderColor: "black",
          }}
        />

        <Button
          title="Create an account"
          onPress={() => navigation.navigate("Register")}
          style={{
            width: SIZES.width - 44,
            marginBottom: SIZES.padding,
            backgroundColor: "transparent",
            borderColor: "black",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
