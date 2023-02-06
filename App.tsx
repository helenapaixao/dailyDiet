import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { Loading } from "./src/components/Loading";
export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
  });

  return (
    <>
    
      <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? <AppRoutes  /> : <Loading />}
      </NavigationContainer>
    </>
  );
}
