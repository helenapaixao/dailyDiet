import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@components/Button";
import Home from "@screens/Home";
import NewFood from "@screens/NewFood";

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="NewFood"
        component={NewFood}
        options={{
          headerBackTitleVisible: false,
          title: "Nova refeição",
          headerStyle: {
            backgroundColor: "#DDDEDF",
          },
          headerTintColor: "#1B1D1E",
          headerTitleStyle: {
            fontFamily:"Nunito_700Bold",
            fontWeight: "bold",
          },
        }}
      />
    </Navigator>
  );
};
