import { View, StyleSheet } from "react-native";

import { Card, Text, IconButton } from "react-native-paper";

import theme from "../assets/theme";

export default function QuestLogEntry({ entry, onDelete }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <Text style={styles.date}>{entry.date}</Text>

          <IconButton
            icon="delete-outline"
            size={20}
            iconColor={theme.custom.colors.error}
            onPress={() => onDelete?.(entry.id)}
          />
        </View>

        <Text style={styles.text}>{entry.text}</Text>
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

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: theme.custom.spacing.sm,
  },

  date: {
    color: theme.custom.colors.textSecondary,

    fontSize: 12,

    fontWeight: "600",
  },

  text: {
    color: theme.custom.colors.text,

    lineHeight: 22,
  },
});
