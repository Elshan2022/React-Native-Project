import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DetailProb } from "../navigation/AppStack";
import { IRecipeResponseId, getRecipeById } from "../service/RecipeById";
import { colors } from "../theme/colors/colors";
import BackButton from "../assets/svg/back.svg";
import TitleContainer from "../components/TitleContainer";
import { StatusBar } from "expo-status-bar";

const height = Dimensions.get("window").height;

export const DetailScreen = ({ route, navigation }: DetailProb) => {
  const { id } = route.params;
  const [recipe, setRecipe] = useState<IRecipeResponseId | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchRecipeById = async () => {
    setLoading(true);
    try {
      const data = await getRecipeById(id);
      const { title, portion, time, description, ingredients, method, image } =
        data;
      setRecipe({
        title,
        portion,
        time,
        description,
        ingredients,
        method,
        image,
      });
    } catch (e) {
      ToastAndroid.show(`${e}`, ToastAndroid.LONG);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipeById();
  }, [id]);

  const getSteps = () => {
    return recipe?.method.map((step, index) => {
      const keys = Object.keys(step);
      const values = Object.values(step);
      return (
        <View key={index} style={styles.step}>
          <Text style={styles.stepKey}>{keys}</Text>
          <Text style={styles.descriptionStyle}>{values}</Text>
        </View>
      );
    });
  };

  const getIngredients = () => {
    return recipe?.ingredients.map((value, index) => {
      return (
        <Text key={index} style={styles.commonTextStyle}>
          {value}
        </Text>
      );
    });
  };

  return (
    <View  style={styles.root}>
      <StatusBar style="light"/>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <>
          <Image style={styles.image} source={{ uri: recipe?.image }} />
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.backButtonContainer}>
              <BackButton width={32} height={32} fill={colors.primary} />
            </View>
          </Pressable>
          <View style={styles.body}>
            <ScrollView>
              <Text style={styles.titleStyle}>{recipe?.title}</Text>
              <Text style={styles.descriptionStyle}>{recipe?.description}</Text>
              <TitleContainer title="Needed of ingredients" />
              {getIngredients()}
              <TitleContainer title="Time of preparing" />
              <Text style={styles.commonTextStyle}>{recipe?.time}</Text>
              <TitleContainer title="Steps of preparing" />
              {getSteps()}
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 320,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 1,
  },
  backButtonContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 35,
    width: 35,
    alignItems: "center",
  },
  body: {
    backgroundColor: colors.white,
    position: "relative",
    width: "100%",
    height: height - 240,
    marginTop: height * 0.41,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  descriptionStyle: {
    fontWeight: "400",
    fontSize: 16,
    color: colors.darkGrey,
    marginTop: 10,
  },
  commonTextStyle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  titleContainer: {
    padding: 25,
    backgroundColor: colors.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  stepKey: {
    fontWeight: "bold",
    fontSize: 16,
  },
  step: {
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
