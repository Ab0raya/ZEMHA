import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Login, Register, Chat, Home } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../screens/onboardingScreen";
import Docs from "../screens/Docs";
import ToDoList from "../screens/ToDoList";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Docs"
          component={Docs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ToDo"
          component={ToDoList}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
