import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import { CATEGORIES } from "../../../data/dummy-data";
import Category from "../../../models/category";
import { CategoryGridTile } from "../../components/CategoryGridTile/CategoryGridTile";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export const CategoriesScreen = (props: Props) => {
  const { navigation } = props;
  const render = ({ title, color }: Category) => {
    const onPress = () => {
      navigation.navigate(Screens.Meals);
    };
    return <CategoryGridTile title={title} color={color} onPress={onPress} />;
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => render(itemData.item)}
      keyExtractor={(item: Category) => item.id}
      numColumns={2}
    />
  );
};
