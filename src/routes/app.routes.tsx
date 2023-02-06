import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
