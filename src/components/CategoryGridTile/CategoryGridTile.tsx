import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  color: string;
};

export const CategoryGridTile = (props: Props) => {
  const { title, color } = props;
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
