import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../../../data/dummy-data";
import { MealList } from "../../components/MealList/MealList";
import { RootState } from "../../store/redux/store";
import { styles } from "./Favorites.styles";

type Props = {};

export const FavoritesScreen = () => {
  // const favoriteCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  const meals = MEALS.filter(({ id }) => favoriteMealIds.includes(id));
  if (!meals.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          You not selected any favorites yet.
        </Text>
      </View>
    );
  }
  return <MealList meals={meals} />;
};
