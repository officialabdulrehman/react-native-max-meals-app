import { Image, Pressable, Text, View } from "react-native";
import Meal from "../../../models/meal";
import { styles } from "./MealItem.styles";

type Props = {
  meal: Meal;
  onPress: () => void;
};

export const MealItem = (props: Props) => {
  const { meal, onPress } = props;
  const { title, imageUrl, duration, complexity, affordability } = meal;
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: "rgba(228, 247, 255, 0.2))",
          radius: 300,
          foreground: true,
        }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration} minutes</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
