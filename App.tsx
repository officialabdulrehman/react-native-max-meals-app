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
        <navigationStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "rgba(0, 179, 255, 1)",
            headerTitleAlign: "center",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        >
          <navigationStack.Screen
            name={Screens.Categories}
            component={CategoriesScreen}
            options={{
              title: Screens.Categories,
            }}
          />
          <navigationStack.Screen
            name={Screens.Meals}
            component={MealsScreen}
            // options={{
            //   title: Screens.Meals,
            // }}
            // options={({ navigation, route }) => ({
            //   title: (route.params as { id: string }).id,
            // })}
          />
        </navigationStack.Navigator>
      </NavigationContainer>
    </>
  );
}
