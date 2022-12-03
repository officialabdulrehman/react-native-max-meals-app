import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import { MEALS } from "../../../data/dummy-data";
import Meal from "../../../models/meal";
import { MealItem } from "../../components/MealItem/MealItem";
import { styles } from "./Meals.styles";

type Props = {};

type RouteParams = {
  Categories: {
    id: string;
  };
};

export const MealsScreen = (props: Props) => {
  const { params } = useRoute<RouteProp<RouteParams, Screens.Categories>>();
  const { id } = params;
  const meals = MEALS.filter((meal: Meal) => meal.categoryIds.indexOf(id) >= 0);
  const render = (item: Meal) => {
    return <MealItem meal={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => render(item)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
