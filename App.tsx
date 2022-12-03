import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { CategoriesScreen } from "./src/screens/CategoriesScreen/Categories.screen";
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <CategoriesScreen />
      </NavigationContainer>
    </>
  );
}
