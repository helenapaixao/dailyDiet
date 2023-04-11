import { Header } from "@components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import NewFood from '@screens/NewFood'

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
      <Screen name= "NewFood" component={NewFood}   options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </Navigator>
  );
};
