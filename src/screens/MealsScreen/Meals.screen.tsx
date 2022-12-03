import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Screens } from "../../../config/Screen.enum";
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
  return (
    <View style={styles.container}>
      <Text>Meals Screen - {id}</Text>
    </View>
  );
};
