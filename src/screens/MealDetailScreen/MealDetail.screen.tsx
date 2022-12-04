import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import Meal from "../../../models/meal";

type Props = {};

type RouteParams = {
  Meals: {
    meal: Meal;
  };
};

export const MealDetail = (props: Props) => {
  const route = useRoute<RouteProp<RouteParams, Screens.Meals>>();
  const {
    meal: { title },
  } = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
