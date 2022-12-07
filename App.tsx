import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { Screens } from "./config/Screen.enum";
import { IconButton } from "./src/components/IconButton/IconButton";
import { CategoriesScreen } from "./src/screens/CategoriesScreen/Categories.screen";
import { FavoritesScreen } from "./src/screens/FavoritesScreen/Favorites.screen";
import { MealDetail } from "./src/screens/MealDetailScreen/MealDetail.screen";
import { MealsScreen } from "./src/screens/MealsScreen/Meals.screen";
import { FavoritesContextProvider } from "./src/store/context/favorites.context";
import { store } from "./src/store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "rgba(0, 179, 255, 1)",
        headerTitleAlign: "center",
        sceneContainerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name={Screens.Home + " "}
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <IconButton
              color="rgba(79, 195, 247, 1)"
              size={size}
              title="home"
              onPress={() => {}}
            />
          ),
          headerTintColor: "rgba(79, 195, 247, 1)",
          drawerActiveTintColor: "rgba(79, 195, 247, 1)",
          drawerActiveBackgroundColor: "rgba(228, 247, 255, 0.6)",
        }}
      />
      <Drawer.Screen
        name={Screens.Favorite}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <IconButton
              color="rgba(79, 195, 247, 1)"
              size={size}
              title="star"
              onPress={() => {}}
            />
          ),
          headerTintColor: "rgba(79, 195, 247, 1)",
          drawerActiveTintColor: "rgba(79, 195, 247, 1)",
          drawerActiveBackgroundColor: "rgba(228, 247, 255, 0.6)",
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <FavoritesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "white" },
                headerTintColor: "rgba(0, 179, 255, 1)",
                headerTitleAlign: "center",
                contentStyle: {
                  backgroundColor: "white",
                },
              }}
            >
              <Stack.Screen
                name={Screens.Home}
                component={DrawerNavigator}
                options={{
                  title: Screens.Home,
                  headerShown: false,
                }}
              />
              <Stack.Screen name={Screens.Meals} component={MealsScreen} />
              <Stack.Screen name={Screens.MealDetail} component={MealDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </Provider>
    </>
  );
}
