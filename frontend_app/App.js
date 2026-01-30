import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddScreen from './add_screen';
import Home from "./Home";
import TicketCard from "./full_details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="addScreen" component={AddScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="fullDetails" component={TicketCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
