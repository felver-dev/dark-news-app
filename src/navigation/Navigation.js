import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Home from "../screens/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Details from "../screens/news/Details";

const Stack = createNativeStackNavigator();
const StackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackGroup />
    </NavigationContainer>
  );
};

export default Navigation;
