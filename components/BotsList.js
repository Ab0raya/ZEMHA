import React from "react";
import { COLORS, images } from "../constants";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
export default function BotsList() {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.bot1}
        onPress={() =>
          navigation.navigate("Chat", {
            color: COLORS.Bot1,
            name: "AF-668",
            image: require("../assets/head/bot1head.png"),
            hint: "Enter your question...",
          })
        }
      >
        <Text style={styles.textbot1}>AF-668</Text>
        <Image
          style={styles.bots}
          source={require("../assets/GIF/bot1.gif")}
        ></Image>
        <Text style={styles.desbot1}>General</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bot2}
        onPress={() =>
          navigation.navigate("Chat", {
            color: COLORS.Bot2,
            name: "AF-667",
            image: require("../assets/head/bot2head.png"),
            hint: "Enter the text you want to reformatte...",
          })
        }
      >
        <Text style={styles.textbot2}>AF-667</Text>
        <Image
          style={styles.bots}
          source={require("../assets/GIF/bot2.gif")}
        ></Image>
        <Text style={styles.desbot2}>Text reformat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bot3}
        onPress={() =>
          navigation.navigate("Chat", {
            color: COLORS.Bot3,
            name: "AF-666",
            image: require("../assets/head/bot3head.png"),
            hint: "Enter code to implement , tech question  ...",
          })
        }
      >
        <Text style={styles.textbot3}>AF-666</Text>
        <Image
          style={styles.bots}
          source={require("../assets/GIF/bot3.gif")}
        ></Image>
        <Text style={styles.desbot3}>Programming</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bot4}
        onPress={() =>
          navigation.navigate("Chat", {
            color: COLORS.Bot4,
            name: "AF-665",
            image: require("../assets/head/bot4head.png"),
            hint: "Enter Image you want to generate...",
          })
        }
      >
        <Text style={styles.textbot4}>AF-665</Text>
        <Image
          style={styles.bots}
          source={require("../assets/GIF/bot4.gif")}
        ></Image>
        <Text style={styles.desbot4}>Image generator</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  textbot1: {
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    marginTop: 40,
    fontSize: 50,
    fontWeight: "bold",
    color: "#EA7F8E",
  },
  textbot2: {
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    marginTop: 40,
    fontSize: 50,
    fontWeight: "bold",
    color: "#A6E4D0",
  },
  textbot3: {
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    marginTop: 40,
    fontSize: 50,
    fontWeight: "bold",
    color: "#FDEB93",
  },
  textbot4: {
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    marginTop: 40,
    fontSize: 50,
    fontWeight: "bold",
    color: "#407BFF",
  },
  desbot1: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 550,
    fontSize: 40,
    color: "#EA7F8E",
    fontWeight: "bold",
  },
  desbot2: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 550,
    fontSize: 40,
    color: "#A6E4D0",
    fontWeight: "bold",
  },
  desbot3: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 550,
    fontSize: 40,
    color: "#FDEB93",
    fontWeight: "bold",
  },
  desbot4: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 550,
    fontSize: 40,
    color: "#407BFF",
    fontWeight: "bold",
  },
  bot1: {
    elevation: 10,
    width: 322,
    height: 620,
    borderRadius: 30,
    backgroundColor: "#84414A",
    marginRight: 24,
    margin: 40,
    marginTop: 10,
  },
  bot2: {
    elevation: 10,
    width: 322,
    height: 620,
    borderRadius: 30,
    backgroundColor: "#3A9276",
    marginRight: 24,
    marginTop: 10,
  },
  bot3: {
    elevation: 10,
    width: 322,
    height: 620,
    borderRadius: 30,
    backgroundColor: "#93741D",
    marginRight: 24,
    marginTop: 10,
  },
  bot4: {
    elevation: 10,
    width: 322,
    height: 620,
    borderRadius: 30,
    backgroundColor: "#223B73",
    marginRight: 24,
    marginTop: 10,
  },
  bots: {
    width: 400,
    height: 410,
    alignSelf: "center",
    marginVertical: 140,
  },
});
