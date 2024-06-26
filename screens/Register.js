import { ScrollView, Text, Image, Alert, View } from "react-native";
import React, { useCallback, useReducer, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FONTS, SIZES, images } from "../constants";
import { COLORS } from "../constants";
import Input from "../components/Input";
import Button from "../components/Button";
import { reducer } from "../utils/reducers/formReducers";
import { validateInput } from "../utils/actions/formActions";
import { getFirebaseApp } from "../utils/firebaseHelper";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, child, set, getDatabase } from "firebase/database";
import { useTheme } from "../themes/ThemeProvider";

const initialState = {
  inputValues: {
    fullName: "",
    email: "",
    password: "",
  },
  inputValidities: {
    fullName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const Register = ({ navigation }) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { colors } = useTheme();

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const createUser = async (fullName, email, userId) => {
    const userData = {
      fullName,
      email,
      userId,
      signUpDate: new Date().toISOString(),
    };

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`);
    await set(childRef, userData);

    return userData;
  };

  const authHandler = async () => {
    const app = getFirebaseApp();
    const auth = getAuth(app);
    setIsLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        formState.inputValues.email,
        formState.inputValues.password
      );

      const { uid } = result.user;

      const userData = await createUser(
        formState.inputValues.fullName,
        formState.inputValues.email,
        uid
      );

      if (userData) {
        setIsLoading(false);
        navigation.navigate("Login");
      }
    } catch (error) {
      const errorCode = error.code;
      let message = "Something went wrong !";
      if (errorCode === "auth/email-already-in-use") {
        message = "This email is already in use";
      }

      setError(message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error);
    }
  }, [error]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDEB93" }}>
      <ScrollView
        style={{
          flex: 1,

          marginHorizontal: 22,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 22,
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
            Register page
          </Text>
          <Image
            source={require("../assets/GIF/register.gif")}
            style={{
              height: 300,
              width: 300,
              marginBottom: 22,
            }}
          />

          <Text
            style={{
              ...FONTS.h4,
              color: colors.text,
              marginVertical: 8,
            }}
          >
            Hope you Enjoy our App :)
          </Text>
        </View>

        <Input
          onInputChanged={inputChangedHandler}
          errorText={formState.inputValidities["fullName"]}
          id="fullName"
          placeholder="Enter your full name"
          placeholderTextColor={colors.text}
        />

        <Input
          onInputChanged={inputChangedHandler}
          errorText={formState.inputValidities["email"]}
          id="email"
          placeholder="Enter your email"
          placeholderTextColor={colors.text}
        />

        <Input
          onInputChanged={inputChangedHandler}
          errorText={formState.inputValidities["password"]}
          id="password"
          placeholder="Enter your password"
          placeholderTextColor={colors.text}
          secureTextEntry
        />

        <Button
          title="Register"
          onPress={authHandler}
          isLoading={isLoading}
          filled
          style={{
            width: SIZES.width - 44,
            marginBottom: SIZES.padding,
            marginVertical: 8,
            backgroundColor: "transparent",
            borderColor: "black",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
