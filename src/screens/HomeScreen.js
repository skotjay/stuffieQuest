import { View, StyleSheet, ScrollView } from "react-native";

import { Text, Button, Card, ActivityIndicator } from "react-native-paper";

import useStuffies from "../hooks/useStuffies";

import theme from "../assets/theme";

export default function HomeScreen({ navigation }) {
  const {
    isLoading,
    totalStuffies,
    favoriteStuffies,
    travelingStuffies,
    displayStuffies,
    missingStuffies,
    averageBondLevel,
  } = useStuffies();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading your quest party...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text variant="headlineLarge" style={styles.title}>
        Stuffie Quest
      </Text>

      <Text style={styles.subtitle}>
        Catalog the companions who have joined your life quest.
      </Text>

      <Card style={styles.heroCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>
            Quest Overview
          </Text>

          <Text style={styles.statText}>Total Stuffies: {totalStuffies}</Text>

          <Text style={styles.statText}>
            Favorite Companions: {favoriteStuffies.length}
          </Text>

          <Text style={styles.statText}>
            Traveling Companions: {travelingStuffies.length}
          </Text>

          <Text style={styles.statText}>
            On Display: {displayStuffies.length}
          </Text>

          <Text style={styles.statText}>Missing: {missingStuffies.length}</Text>

          <Text style={styles.statText}>
            Average Bond Level: {averageBondLevel}/10
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.buttonGroup}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("StuffieList")}
        >
          View Collection
        </Button>

        <Button
          mode="contained-tonal"
          style={styles.button}
          onPress={() => navigation.navigate("AddStuffie")}
        >
          Add New Stuffie
        </Button>

        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate("Favorites")}
        >
          View Favorites
        </Button>
      </View>

      <Card style={styles.infoCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.cardTitle}>
            How This App Works
          </Text>

          <Text style={styles.infoText}>
            Data is stored in shared Stuffie state, passed down into components
            as props, and updated when child components send functions back up
            through events.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: theme.custom.colors.background,
  },

  content: {
    padding: theme.custom.spacing.lg,

    paddingBottom: 120,
  },

  centered: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: theme.custom.colors.background,
  },

  loadingText: {
    marginTop: theme.custom.spacing.md,

    color: theme.custom.colors.textSecondary,
  },

  title: {
    color: theme.custom.colors.primary,

    fontWeight: "800",

    marginBottom: theme.custom.spacing.sm,
  },

  subtitle: {
    color: theme.custom.colors.textSecondary,

    marginBottom: theme.custom.spacing.lg,

    fontSize: 16,
  },

  heroCard: {
    marginBottom: theme.custom.spacing.lg,

    borderRadius: theme.custom.radius.lg,

    backgroundColor: theme.custom.colors.surface,
  },

  infoCard: {
    marginTop: theme.custom.spacing.lg,

    borderRadius: theme.custom.radius.lg,

    backgroundColor: theme.custom.colors.surface,
  },

  cardTitle: {
    color: theme.custom.colors.text,

    marginBottom: theme.custom.spacing.sm,
  },

  statText: {
    color: theme.custom.colors.text,

    marginBottom: theme.custom.spacing.sm,

    fontSize: 16,
  },

  buttonGroup: {
    gap: theme.custom.spacing.md,
  },

  button: {
    borderRadius: theme.custom.radius.md,
  },

  infoText: {
    color: theme.custom.colors.textSecondary,

    lineHeight: 22,
  },
});
