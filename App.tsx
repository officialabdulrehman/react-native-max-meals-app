import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Screens } from "./config/Screen.enum";
import { CategoriesScreen } from "./src/screens/CategoriesScreen/Categories.screen";
import { MealsScreen } from "./src/screens/MealsScreen/Meals.screen";

const navigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <navigationStack.Navigator>
          <navigationStack.Screen
            name={Screens.Categories}
            component={CategoriesScreen}
          />
          <navigationStack.Screen
            name={Screens.Meals}
            component={MealsScreen}
          />
        </navigationStack.Navigator>
      </NavigationContainer>
    </>
  );
}
