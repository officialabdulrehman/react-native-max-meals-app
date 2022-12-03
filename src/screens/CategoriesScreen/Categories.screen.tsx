import { FlatList } from "react-native";
import { CATEGORIES } from "../../../data/dummy-data";
import Category from "../../../models/category";
import { CategoryGridTile } from "../../components/CategoryGridTile/CategoryGridTile";

type Props = {};

const render = ({ title, color }: Category) => {
  return <CategoryGridTile title={title} color={color} />;
};

export const CategoriesScreen = (props: Props) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => render(itemData.item)}
      keyExtractor={(item: Category) => item.id}
      numColumns={2}
    />
  );
};
