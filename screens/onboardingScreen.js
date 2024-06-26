import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Welcome")}
      onDone={() => navigation.navigate("Welcome")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              style={styles.images}
              source={require("../assets/images/onboarding/onboarding1.png")}
            />
          ),
          title: "Be more productive",
          subtitle: "increase your productivity by using our app",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              style={styles.images}
              source={require("../assets/images/onboarding/onboarding2.png")}
            />
          ),
          title: "Save Your Time",
          subtitle: "Finish your taks and assignments by a few clicks",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              style={styles.images}
              source={require("../assets/images/onboarding/onboarding3.png")}
            />
          ),
          title: "ZEMHA and his friends",
          subtitle: "",
        },
        {
          backgroundColor: "#407BFF",
          image: (
            <Image
              style={styles.images}
              source={require("../assets/images/onboarding/onboarding4.png")}
            />
          ),
          title: "Take notes for your tasks",
          subtitle: "",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: 350,
    height: 350,
  },
});
