import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import Meal from "../../../models/meal";
import { styles } from "./MealDetail.styles";

type Props = {};

type RouteParams = {
  Meals: {
    meal: Meal;
  };
};

export const MealDetail = (props: Props) => {
  const route = useRoute<RouteProp<RouteParams, Screens.Meals>>();
  const {
    meal: {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      ingredients,
      steps,
    },
  } = route.params;

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
