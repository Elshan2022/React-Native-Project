import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ToastAndroid,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { HomeProp } from "../navigation/AppStack";
import { colors } from "../theme/colors/colors";
import { IRecipeInterface, getRecipes } from "../service/RecipesService";
import { useEffect, useState } from "react";

const HomeScreen = ({ navigation }: HomeProp) => {
  const [recipes, setRecipes] = useState<IRecipeInterface[]>([]);

  const fetchRecipes = async () => {
    try {
      const data = await getRecipes();
      setRecipes(data);
    } catch (e) {
      ToastAndroid.show(`${e}`, ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    fetchRecipes();
  });

  const renderRecipeItem = ({ item }: { item: IRecipeInterface }) => (
    <View style={styles.renderItem}>
      {
        <Image
          style={styles.image}
          source={{ uri: item.image }}
          resizeMode="cover"
        />
      }
      <View style={styles.itemTitleContainer}>
        <Text numberOfLines={2} style={styles.itemTitleText}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View>
      {
        <HomeHeader
          onLogout={() => {
            navigation.navigate("Login");
          }}
        />
      }
      <View style={styles.root}>
        <Text style={styles.title}>Delicious Recipes </Text>
        <Text style={styles.subtitle}>with features </Text>
        <View style={styles.body}>
          {
            <FlatList
              data={recipes}
              numColumns={2}
              renderItem={renderRecipeItem}
            />
          }
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 173,
    height: 150,
    borderRadius: 15,
    resizeMode: "cover",
  },
  body: { height: 530, marginTop: 10 },
  root: {
    margin: 16,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "500",
  },
  renderItem: {
    elevation: 1,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  itemTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemTitleContainer: {
    margin: 5,
    width: 165,
  },
});
