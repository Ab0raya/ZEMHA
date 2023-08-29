import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function Docs({ navigation: { goBack } }) {
  let [name, setName] = useState("");
  let [Subject, setSubject] = useState("");
  let [Teacher, setTeacher] = useState("");
  let [Content, setContent] = useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  var date = new Date().toLocaleString();
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <title>page printer </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
  }
  
  
  .sidenav a {
    color: white;
    padding: 16px;
    text-decoration: none;
    display: block;
  }
  
  .sidenav h4 {
    color: white;
    padding: 16px;
    text-decoration: none;
    display: block;
  }
  
  .content {
    margin-left: 200px;
    padding-left: 20px;
  }
  </style>
  </head>
  <body>
  
  <div class="sidenav">
    <h4>Title: ${name}<h4>
    <h4>Subject: ${Subject}<h4>
    <h4>Teacher: ${Teacher}<h4>
    <h4>${date}<h4>
  </div>
  
  <div class="content">
    <h2>Content :</h2>
    <p>${Content}</p>
  </div>
  
  </body>
  </html>
  `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_big}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleModal}>
              <AntDesign name="closecircleo" size={35} color="white" />
            </TouchableOpacity>
            <Image
              source={require("../assets/images/docModel.png")}
              style={{ width: 350, height: 573, resizeMode: "contain" }}
            />
          </View>
        </Modal>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.text}>
            <AntDesign name="left" size={33} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.text1} fontSize>
          PDF
        </Text>
        <TouchableOpacity style={styles.text} onPress={handleModal}>
          <AntDesign name="exclamationcircleo" size={33} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.container_samll}>
        <TextInput
          value={name}
          placeholder="Title"
          style={styles.textInput}
          placeholderTextColor="#FFFFFF"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          value={Subject}
          placeholder="Subject"
          placeholderTextColor="#FFFFFF"
          style={styles.textInput}
          onChangeText={(value) => setSubject(value)}
        />
        <TextInput
          value={Teacher}
          placeholder="Teacher Name"
          placeholderTextColor="#FFFFFF"
          style={styles.textInput}
          onChangeText={(value) => setTeacher(value)}
        />
        <TextInput
          multiline={true}
          value={Content}
          placeholder="Content"
          placeholderTextColor="#FFFFFF"
          style={styles.textInput}
          onChangeText={(value) => setContent(value)}
        />

        <TouchableOpacity onPress={generatePdf} style={styles.buttonContainer3}>
          <Text style={styles.buttonText3}>Generate</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA7F8E",
  },
  buttonContainer3: {
    marginVertical: 20,
    height: 60,
    width: 300,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    color: "red",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText3: {
    color: "#84414A",
    fontSize: 25,
  },
  textInput: {
    alignSelf: "stretch",
    padding: 20,
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    fontSize: 18,
  },
  container_samll: {
    flex: 1,
    alignItems: "center",
  },
  container_big: {
    marginLeft: 20,
    flexDirection: "row",
    marginTop: 30,
  },
  textInputc: {
    alignSelf: "stretch",
    paddingBottom: 200,
    paddingLeft: 20,
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    borderColor: "#D9D9D9",
  },
  icon: {
    fontSize: 50,
    marginLeft: 100,
    color: "black",
  },
  text1: {
    fontSize: 30,
    marginTop: 25,
    marginLeft: 30,
    marginRight: 120,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    flexDirection: "row",
    marginRight: 110,
    marginTop: 30,
    color: "#FFFFFF",
  },
});
