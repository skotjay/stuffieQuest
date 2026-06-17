import { View, StyleSheet, Image, Animated } from "react-native";

import { useRef } from "react";

import { Card, Text, IconButton } from "react-native-paper";

import StatBadge from "./StatBadge";

import theme from "../assets/theme";

export default function StuffieCard({ stuffie, onPress, onFavorite }) {
  const scale = useRef(new Animated.Value(1)).current;

  function playPressAnimation() {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.97,
        duration: 80,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function handleCardPress() {
    playPressAnimation();

    setTimeout(() => {
      onPress?.(stuffie.id);
    }, 100);
  }

  function handleFavorite() {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.06,
        friction: 3,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    onFavorite?.(stuffie.id);
  }

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale,
          },
        ],
      }}
    >
      <Card style={styles.card} onPress={handleCardPress}>
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
            <View style={styles.titleArea}>
              <Text variant="titleLarge" style={styles.name}>
                {stuffie.name}
              </Text>

              <Text style={styles.subtitle}>{stuffie.beingType}</Text>
            </View>

            <IconButton
              icon={stuffie.favorite ? "heart" : "heart-outline"}
              iconColor={theme.custom.colors.accent}
              size={28}
              onPress={handleFavorite}
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
    </Animated.View>
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

    marginBottom: theme.custom.spacing.sm,
  },

  titleArea: {
    flex: 1,
  },

  name: {
    color: theme.custom.colors.text,

    fontWeight: "700",
  },

  subtitle: {
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
