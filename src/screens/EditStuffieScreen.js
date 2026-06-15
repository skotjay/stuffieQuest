import { View, StyleSheet } from "react-native";

import { Text, Button } from "react-native-paper";

import StuffieForm from "../components/StuffieForm";

import useStuffies from "../hooks/useStuffies";

import theme from "../assets/theme";

export default function EditStuffieScreen({ route, navigation }) {
  const { stuffieId } = route.params;

  const { getStuffieById, updateStuffie } = useStuffies();

  const stuffie = getStuffieById(stuffieId);

  if (!stuffie) {
    return (
      <View style={styles.centered}>
        <Text>Stuffie not found.</Text>

        <Button
          mode="contained"
          onPress={() => navigation.navigate("StuffieList")}
        >
          Back to Collection
        </Button>
      </View>
    );
  }

  function handleUpdateStuffie(updatedStuffieData) {
    const updatedStuffie = {
      ...stuffie,
      ...updatedStuffieData,

      id: stuffie.id,

      joinedDate: stuffie.joinedDate,

      favorite: stuffie.favorite,

      questLog: stuffie.questLog || [],
    };

    updateStuffie(updatedStuffie);

    navigation.navigate("StuffieDetails", { stuffieId: stuffie.id });
  }

  return <StuffieForm initialValues={stuffie} onSubmit={handleUpdateStuffie} />;
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    padding: theme.custom.spacing.lg,

    backgroundColor: theme.custom.colors.background,
  },
});
