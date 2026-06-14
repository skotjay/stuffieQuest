import { View, StyleSheet } from "react-native";

import { Text, Button } from "react-native-paper";

import useStuffies from "../hooks/useStuffies";

import StuffieList from "../components/StuffieList";

import theme from "../assets/theme";

export default function FavoritesScreen({ navigation }) {
  const { favoriteStuffies, toggleFavorite } = useStuffies();

  function handleOpenDetails(stuffieId) {
    navigation.navigate("StuffieDetails", { stuffieId });
  }

  return (
    <View style={styles.screen}>
      <Text variant="headlineMedium" style={styles.title}>
        Favorite Companions
      </Text>

      <Text style={styles.subtitle}>
        These are the Stuffies currently marked as favorite members of your
        quest party.
      </Text>

      <View style={styles.listArea}>
        <StuffieList
          stuffies={favoriteStuffies}
          onPressStuffie={handleOpenDetails}
          onFavoriteStuffie={toggleFavorite}
          emptyMessage="No favorite Stuffies yet."
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("StuffieList")}
      >
        View Full Collection
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: theme.custom.colors.background,

    padding: theme.custom.spacing.lg,
  },

  title: {
    color: theme.custom.colors.primary,

    fontWeight: "800",

    marginBottom: theme.custom.spacing.sm,
  },

  subtitle: {
    color: theme.custom.colors.textSecondary,

    marginBottom: theme.custom.spacing.lg,

    lineHeight: 22,
  },

  listArea: {
    flex: 1,
  },

  button: {
    borderRadius: theme.custom.radius.md,

    marginTop: theme.custom.spacing.md,
  },
});
