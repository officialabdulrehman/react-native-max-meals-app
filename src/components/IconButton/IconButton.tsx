import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { styles } from "./IconButton.styles";

type Props = {
  title: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  size: number;
  onPress: () => void;
};

export const IconButton = (props: Props) => {
  const { title, color, size, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={title} color={color} size={size} />
    </Pressable>
  );
};
