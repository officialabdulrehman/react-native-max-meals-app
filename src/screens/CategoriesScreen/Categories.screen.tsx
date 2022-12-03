import { FlatList, View } from "react-native";
import { CATEGORIES } from "../../../data/dummy-data";
import Category from "../../../models/category";
import { CategoryGridTile } from "../../components/CategoryGridTile/CategoryGridTile";
import { styles } from "./Categories.styles";

type Props = {};

const render = ({ title, color }: Category) => {
  return <CategoryGridTile title={title} color={color} />;
};

export const CategoriesScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => render(itemData.item)}
        keyExtractor={(item: Category) => item.id}
      />
    </View>
  );
};
