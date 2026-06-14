import { View, StyleSheet, Image } from "react-native";

import { Card, Text, IconButton } from "react-native-paper";

import StatBadge from "./StatBadge";

import theme from "../assets/theme";

export default function StuffieCard({ stuffie, onPress, onFavorite }) {
  return (
    <Card style={styles.card} onPress={() => onPress?.(stuffie.id)}>
      {stuffie.imageUri ? (
        <Card.Cover
          source={{
            uri: stuffie.imageUri,
          }}
        />
      ) : (
        <Image
          source={{
            uri: "https://placehold.co/600x600?text=Stuffie",
          }}
          style={styles.image}
        />
      )}

      <Card.Content>
        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.name}>
            {stuffie.name}
          </Text>

          <IconButton
            icon={stuffie.favorite ? "heart" : "heart-outline"}
            iconColor={theme.custom.colors.accent}
            onPress={() => onFavorite?.(stuffie.id)}
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

        <Text style={styles.bond}>
          Bond Level: {stuffie.bondLevel}
          /10
        </Text>

        <Text numberOfLines={2} style={styles.story}>
          {stuffie.originStory}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.custom.spacing.md,

    backgroundColor: theme.custom.colors.surface,

    borderRadius: theme.custom.radius.lg,
  },

  image: {
    height: 220,

    width: "100%",

    borderTopLeftRadius: theme.custom.radius.lg,

    borderTopRightRadius: theme.custom.radius.lg,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  name: {
    flex: 1,

    color: theme.custom.colors.text,
  },

  subtitle: {
    marginBottom: theme.custom.spacing.sm,

    color: theme.custom.colors.textSecondary,
  },

  badges: {
    flexDirection: "row",

    flexWrap: "wrap",

    marginTop: theme.custom.spacing.sm,
  },

  bond: {
    marginTop: theme.custom.spacing.sm,

    fontWeight: "600",

    color: theme.custom.colors.text,
  },

  story: {
    marginTop: theme.custom.spacing.sm,

    color: theme.custom.colors.textSecondary,
  },
});
