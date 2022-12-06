import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { Screens } from "../../../config/Screen.enum";
import Meal from "../../../models/meal";
import { MealItem } from "../MealItem/MealItem";

type Props = {
  meals: Meal[];
};

type NavProps = {
  Categories: { id: string } | undefined;
  MealDetail: { meal: Meal } | undefined;
};

export const MealList = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const { meals } = props;
  const render = (item: Meal) => {
    const onPress = () => {
      navigation.navigate(Screens.MealDetail, { meal: item });
    };
    return <MealItem meal={item} onPress={onPress} />;
  };

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => render(item)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
