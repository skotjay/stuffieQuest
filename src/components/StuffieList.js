import { FlatList, StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";

import StuffieCard from "./StuffieCard";

import theme from "../assets/theme";

export default function StuffieList({
  stuffies,
  onPressStuffie,
  onFavoriteStuffie,
  emptyMessage = "No Stuffies found.",
}) {
  if (!stuffies || stuffies.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={stuffies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StuffieCard
          stuffie={item}
          onPress={onPressStuffie}
          onFavorite={onFavoriteStuffie}
        />
      )}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: theme.custom.spacing.xl,
  },

  emptyContainer: {
    padding: theme.custom.spacing.lg,

    alignItems: "center",

    justifyContent: "center",
  },

  emptyText: {
    color: theme.custom.colors.textSecondary,

    textAlign: "center",
  },
});
