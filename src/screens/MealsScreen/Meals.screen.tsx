import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Screens } from "../../../config/Screen.enum";
import { CATEGORIES, MEALS } from "../../../data/dummy-data";
import Category from "../../../models/category";
import Meal from "../../../models/meal";
import { MealList } from "../../components/MealList/MealList";

type Props = {};

type RouteParams = {
  Categories: {
    id: string;
  };
};

type NavProps = {
  Categories: { id: string } | undefined;
  MealDetail: { meal: Meal } | undefined;
};

export const MealsScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const route = useRoute<RouteProp<RouteParams, Screens.Categories>>();
  const { id } = route.params;

  useLayoutEffect(() => {
    const title = CATEGORIES.find(
      (category: Category) => category.id === id
    )?.title;
    navigation.setOptions({
      title,
    });
  }, [id, navigation]);

  const meals = MEALS.filter((meal: Meal) => meal.categoryIds.indexOf(id) >= 0);

  return <MealList meals={meals} />;
};
