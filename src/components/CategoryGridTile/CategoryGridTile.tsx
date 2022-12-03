import { Pressable, Text, View } from "react-native";
import { styles } from "./CategoryGridTile.styles";

type Props = {
  title: string;
  color: string;
};

export const CategoryGridTile = (props: Props) => {
  const { title, color } = props;
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#cbf0ff", radius: 200 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
