import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import { CATEGORIES } from "../../../data/dummy-data";
import Category from "../../../models/category";
import { CategoryGridTile } from "../../components/CategoryGridTile/CategoryGridTile";

type Props = {
  // navigation: NavigationProp<ParamListBase>;
};

type NavProps = {
  Meals: { id: string } | undefined;
};

export const CategoriesScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const render = ({ id, title, color }: Category) => {
    const onPress = () => {
      navigation.navigate(Screens.Meals, { id });
    };
    return <CategoryGridTile title={title} color={color} onPress={onPress} />;
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => render(itemData.item)}
      keyExtractor={(item: Category) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
