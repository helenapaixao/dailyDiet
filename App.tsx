import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { Loading } from "./src/components/Loading";
export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
  });

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <StatusBar backgroundColor="transparent" translucent />
    
     <NavigationContainer>
        {fontsLoaded ? <AppRoutes  /> : <Loading />}
      </NavigationContainer> 
    </View>
  );
}
