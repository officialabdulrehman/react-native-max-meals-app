import { useContext } from "react";
import { MEALS } from "../../../data/dummy-data";
import { MealList } from "../../components/MealList/MealList";
import { FavoritesContext } from "../../store/context/favorites.context";

type Props = {};

export const FavoritesScreen = () => {
  const favoriteCtx = useContext(FavoritesContext);
  const meals = MEALS.filter(({ id }) => favoriteCtx.ids.includes(id));
  return <MealList meals={meals} />;
};
