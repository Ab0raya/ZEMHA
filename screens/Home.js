import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "../themes/ThemeProvider";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.areaStyle}>
      <View style={styles.center}>
        <Text
          style={{
            marginTop: 30,
            ...FONTS.h5,
            color: colors.text,
            marginVertical: 8,
          }}
        >
          3AWADEN
        </Text>
        <ScrollView horizontal={true} style={{ flex: 1 }}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: COLORS.primary }]}
            onPress={() =>
              navigation.navigate("Chat", {
                color: COLORS.primary,
                name: "3awaden",
                image: images.Aawad,
                hint: "Enter your question...",
              })
            }
          >
            <Image
              source={images.Aawad}
              style={{
                height: 220,
                width: 220,
                marginBottom: 30,
              }}
            />
            <View style={{ alignItems: "stretch" }}>
              <Text style={styles.normalText}>3AWADEN</Text>
              <Text style={styles.btnText}>General</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#D17A5D" }]}
            onPress={() =>
              navigation.navigate("Chat", {
                color: "#D17A5D",
                name: "El-Kaber",
                image: images.ElKaberHead,
                hint: "Enter the text you want to reformatte...",
              })
            }
          >
            <Image
              source={images.ElKaber}
              style={{
                height: 200,
                width: 200,
              }}
            />
            <View style={{ alignItems: "stretch" }}>
              <Text style={styles.normalText}>EL-Kaber</Text>
              <Text style={styles.btnText}>Text Formatting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#58786E" }]}
            onPress={() =>
              navigation.navigate("Chat", {
                color: "#58786E",
                name: "Kalawe",
                image: images.KalaweHead,
                hint: "Enter code to implement , tech question  ...",
              })
            }
          >
            <Image
              source={images.Kalawe}
              style={{
                height: 220,
                width: 220,
                marginBottom: 21,
              }}
            />
            <View style={{ alignItems: "stretch" }}>
              <Text style={styles.normalText}>KALAWE</Text>
              <Text style={styles.btnText}>Programming</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#FC9292" }]}
            onPress={() =>
              navigation.navigate("Chat", {
                color: "#FC9292",
                name: "Zaher",
                image: images.Zaher,
                hint: "Enter Image you want to generate...",
              })
            }
          >
            <Image
              source={images.Zaher}
              style={{
                height: 180,
                width: 180,
                marginBottom: 30,
              }}
            />
            <View style={{ alignItems: "stretch" }}>
              <Text style={styles.normalText}>ZAHER</Text>
              <Text style={styles.btnText}>Images</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaStyle: {
    backgroundColor: "#BEE0C0",
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  subTitle: {
    ...FONTS.h4,
    marginVertical: 22,
  },
  box: {
    width: 300,
    paddingVertical: 18,
    marginVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    ...FONTS.body4,
    textAlign: "center",
    color: COLORS.white,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    width: 350,
    height: 200,
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding * 2,
    borderRadius: 30,
    marginHorizontal: 25,
    marginVertical: 25,
  },
  btnText: {
    ...FONTS.body5,
    color: COLORS.white,
    marginRight: 60,
    marginBottom: 20,
  },
  normalText: {
    ...FONTS.body3,
    color: COLORS.white,
  },
});
export default Home;
