import { useContext } from "react";
import { Text, View } from "react-native";
import { MEALS } from "../../../data/dummy-data";
import { MealList } from "../../components/MealList/MealList";
import { FavoritesContext } from "../../store/context/favorites.context";
import { styles } from "./Favorites.styles";

type Props = {};

export const FavoritesScreen = () => {
  const favoriteCtx = useContext(FavoritesContext);
  const meals = MEALS.filter(({ id }) => favoriteCtx.ids.includes(id));
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
