import { View, TouchableOpacity, TextInput, Image, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, FONTS } from "../constants";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { useTheme } from "../themes/ThemeProvider";
import { useRoute } from "@react-navigation/native";

const Chat = ({ navigation }) => {
  const route = useRoute();
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState(
    "Results should be shown here."
  );
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([]);
  const { colors } = useTheme();

  const renderMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.user._id === 1) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "#243E4C",
                marginRight: 12,
                marginVertical: 12,
              },
            }}
            textStyle={{
              right: {
                color: COLORS.white,
              },
            }}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Image
            source={route.params.image}
            style={{
              height: 30,
              width: 40,
              marginLeft: 8,
            }}
          />
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: COLORS.secondaryWhite,
                marginLeft: 12,
              },
            }}
            textStyle={{
              left: {
                color: COLORS.black,
              },
            }}
          />
        </View>
      );
    }

    return <Bubble {...props} />;
  };

  const generateText = () => {
    setIsTyping(true);
    const message = {
      _id: Math.random().toString(36).substring(7),
      text:
        route.params.hint === "Enter the text you want to reformatte..."
          ? "reformatte this words ..." + inputMessage
          : inputMessage,
      createAt: new Date(),
      user: { _id: 1 },
    };

    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, [message])
    );
    //API key and home url fot text and image
    //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
    //https://api.openai.com/v1/chat/completions
    //https://api.openai.com/v1/images/generations

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: inputMessage,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setInputMessage("");
        setOutputMessage(data.choices[0].message.content.trim());

        const message = {
          _id: Math.random().toString(36).substring(7),
          text: data.choices[0].message.content.trim(),
          createAt: new Date(),
          user: { _id: 2, name: "ChatGPT" },
        };

        setIsTyping(false);
        setMessages((previousMessage) =>
          GiftedChat.append(previousMessage, [message])
        );
      });
  };

  const generateImages = () => {
    setIsTyping(true);
    const message = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createdAt: new Date(),
      user: { _id: 1 },
    };

    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, [message])
    );

    fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        prompt: inputMessage,
        n: 1,
        size: "1024x1024",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data[0].url);
        setInputMessage("");
        setOutputMessage(data.data[0].url);
        setIsTyping(false);

        data.data.forEach((item) => {
          const message = {
            _id: Math.random().toString(36).substring(7),
            text: "Image",
            createdAt: new Date(),
            user: { _id: 2, name: "ChatGPT" },
            image: item.url,
          };

          setMessages((previousMessage) =>
            GiftedChat.append(previousMessage, [message])
          );
        });
      });
  };

  const submitHandler = () => {
    if (route.params.hint === "Enter Image you want to generate...") {
      generateImages();
    } else {
      generateText();
    }
  };

  const handleInputText = (text) => {
    setInputMessage(text);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: route.params.color,
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          height: 60,
          backgroundColor: "route.params.color",
          position: "absolute",
          top: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 22,
          width: SIZES.width,
          zIndex: 9999,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginTop: 30,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color={"white"} />
        </TouchableOpacity>
        <Text
          style={{
            marginRight: 120,
            marginTop: 30,
            ...FONTS.h3,
            color: "white",
            marginVertical: 8,
          }}
        >
          {route.params.name}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <GiftedChat
          messages={messages}
          renderInputToolbar={() => {}}
          user={{ _id: 1 }}
          minInputToolbarHeight={0}
          renderMessage={renderMessage}
          isTyping={isTyping}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.background,
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: 10,
            backgroundColor: colors.background,
            paddingVertical: 8,
            marginHorizontal: 12,
            borderRadius: 12,
            borderColor: colors.text,
            borderWidth: 0.2,
          }}
        >
          <TextInput
            value={inputMessage}
            onChangeText={handleInputText}
            placeholder={route.params.hint}
            placeholderTextColor={colors.text}
            style={{
              color: colors.text,
              flex: 1,
              paddingHorizontal: 10,
            }}
          />

          <TouchableOpacity
            onPress={submitHandler}
            style={{
              padding: 6,
              borderRadius: 8,
              marginHorizontal: 12,
            }}
          >
            <FontAwesome name="send-o" color={route.params.color} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
