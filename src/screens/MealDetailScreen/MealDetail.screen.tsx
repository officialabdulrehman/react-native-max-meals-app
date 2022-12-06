import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { Image, Text, View } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import Meal from "../../../models/meal";
import { IconButton } from "../../components/IconButton/IconButton";
import { FavoritesContext } from "../../store/context/favorites.context";
import { styles } from "./MealDetail.styles";

type Props = {};

type RouteParams = {
  Meals: {
    meal: Meal;
  };
};

type NavProps = {};

export const MealDetail = (props: Props) => {
  const favoriteCtx = useContext(FavoritesContext);
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const route = useRoute<RouteProp<RouteParams, Screens.Meals>>();
  const {
    meal: {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      ingredients,
      steps,
    },
  } = route.params;
  const isMealFav = favoriteCtx.ids.includes(id);

  const handleFavStatusChange = () => {
    if (isMealFav) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          color="rgba(79, 195, 247, 1)"
          size={24}
          title={isMealFav ? "star" : "star-outline"}
          onPress={handleFavStatusChange}
        />
      ),
    });
  }, [navigation, handleFavStatusChange]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration} minutes</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.sectionHeadingContainer}>
        <Text style={styles.sectionHeading}>Ingredients</Text>
      </View>
      {ingredients.map((ingredient: string) => (
        <Text key={ingredient} style={styles.detailText}>
          {ingredient}
        </Text>
      ))}
      <View style={styles.sectionHeadingContainer}>
        <Text style={styles.sectionHeading}>Steps</Text>
      </View>
      {steps.map((step: string) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};
