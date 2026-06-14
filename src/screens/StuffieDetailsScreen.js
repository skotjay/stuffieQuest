import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Button, Card, IconButton, Text } from "react-native-paper";

import useStuffies from "../hooks/useStuffies";

import StatBadge from "../components/StatBadge";

import theme from "../assets/theme";

export default function StuffieDetailsScreen({ route, navigation }) {
  const { stuffieId } = route.params;

  const { getStuffieById, toggleFavorite, deleteStuffie } = useStuffies();

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

  function handleDelete() {
    deleteStuffie(stuffie.id);

    navigation.navigate("StuffieList");
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {stuffie.imageUri ? (
        <Image
          source={{
            uri: stuffie.imageUri,
          }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No portrait available</Text>
        </View>
      )}

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text variant="headlineMedium" style={styles.name}>
              {stuffie.name}
            </Text>

            <IconButton
              icon={stuffie.favorite ? "heart" : "heart-outline"}
              iconColor={theme.custom.colors.accent}
              onPress={() => toggleFavorite(stuffie.id)}
            />
          </View>

          <Text style={styles.subtitle}>{stuffie.beingType}</Text>

          <View style={styles.badges}>
            <StatBadge label={stuffie.questRole} />

            <StatBadge label={stuffie.rarity} type={stuffie.rarity} />

            <StatBadge
              label={stuffie.currentStatus}
              type={stuffie.currentStatus}
            />
          </View>

          <Text style={styles.sectionTitle}>Bond Level</Text>

          <Text style={styles.bodyText}>{stuffie.bondLevel}/10</Text>

          <Text style={styles.sectionTitle}>Origin Story</Text>

          <Text style={styles.bodyText}>
            {stuffie.originStory || "No origin story recorded."}
          </Text>

          <Text style={styles.sectionTitle}>Barter Value</Text>

          <Text style={styles.bodyText}>${stuffie.barterValue}</Text>

          <Text style={styles.sectionTitle}>Joined Date</Text>

          <Text style={styles.bodyText}>{stuffie.joinedDate}</Text>

          <Text style={styles.sectionTitle}>Acquisition Location</Text>

          {stuffie.acquiredLocation ? (
            <>
              <Text style={styles.bodyText}>
                Latitude: {stuffie.acquiredLocation.latitude}
              </Text>

              <Text style={styles.bodyText}>
                Longitude: {stuffie.acquiredLocation.longitude}
              </Text>
            </>
          ) : (
            <Text style={styles.bodyText}>No GPS location recorded.</Text>
          )}

          <Text style={styles.sectionTitle}>Quest Log Entries</Text>

          <Text style={styles.bodyText}>
            {stuffie.questLog?.length || 0} memories recorded
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.buttonGroup}>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("EditStuffie", { stuffieId: stuffie.id })
          }
          style={styles.button}
        >
          Edit Stuffie
        </Button>

        <Button
          mode="contained-tonal"
          onPress={() =>
            navigation.navigate("QuestLog", { stuffieId: stuffie.id })
          }
          style={styles.button}
        >
          View Quest Log
        </Button>

        <Button
          mode="outlined"
          onPress={handleDelete}
          textColor={theme.custom.colors.error}
          style={styles.button}
        >
          Delete Stuffie
        </Button>
      </View>
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

    padding: theme.custom.spacing.lg,

    backgroundColor: theme.custom.colors.background,
  },

  image: {
    width: "100%",

    height: 300,

    borderRadius: theme.custom.radius.lg,

    marginBottom: theme.custom.spacing.lg,
  },

  placeholder: {
    width: "100%",

    height: 300,

    borderRadius: theme.custom.radius.lg,

    marginBottom: theme.custom.spacing.lg,

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: theme.custom.colors.border,
  },

  placeholderText: {
    color: theme.custom.colors.textSecondary,
  },

  card: {
    borderRadius: theme.custom.radius.lg,

    backgroundColor: theme.custom.colors.surface,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  name: {
    flex: 1,

    color: theme.custom.colors.primary,

    fontWeight: "800",
  },

  subtitle: {
    color: theme.custom.colors.textSecondary,

    marginBottom: theme.custom.spacing.md,

    fontSize: 16,
  },

  badges: {
    flexDirection: "row",

    flexWrap: "wrap",

    marginBottom: theme.custom.spacing.md,
  },

  sectionTitle: {
    marginTop: theme.custom.spacing.md,

    marginBottom: theme.custom.spacing.xs,

    color: theme.custom.colors.text,

    fontWeight: "700",

    fontSize: 16,
  },

  bodyText: {
    color: theme.custom.colors.textSecondary,

    lineHeight: 22,
  },

  buttonGroup: {
    marginTop: theme.custom.spacing.lg,

    gap: theme.custom.spacing.md,
  },

  button: {
    borderRadius: theme.custom.radius.md,
  },
});
