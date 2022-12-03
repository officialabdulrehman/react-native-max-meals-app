import { View } from "react-native";
import { styles } from "./App.styles";
import { CategoriesScreen } from "./src/screens/CategoriesScreen/Categories.screen";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoriesScreen />
    </View>
  );
}
