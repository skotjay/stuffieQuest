import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";

import { useState } from "react";

import useStuffies from "../hooks/useStuffies";

import QuestLogEntry from "../components/QuestLogEntry";

import theme from "../assets/theme";

export default function QuestLogScreen({ route, navigation }) {
  const { stuffieId } = route.params;

  const { getStuffieById, addQuestLogEntry, deleteQuestLogEntry } =
    useStuffies();

  const [newEntryText, setNewEntryText] = useState("");

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

  function handleAddEntry() {
    if (newEntryText.trim().length === 0) {
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      text: newEntryText.trim(),
    };

    addQuestLogEntry(stuffie.id, newEntry);

    setNewEntryText("");
  }

  function handleDeleteEntry(entryId) {
    deleteQuestLogEntry(stuffie.id, entryId);
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text variant="headlineMedium" style={styles.title}>
        {stuffie.name}'s Quest Log
      </Text>

      <Text style={styles.subtitle}>
        Record memories, adventures, and important moments from this Stuffie's
        journey.
      </Text>

      <TextInput
        label="New Quest Log Entry"
        value={newEntryText}
        onChangeText={setNewEntryText}
        multiline
        numberOfLines={4}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleAddEntry} style={styles.button}>
        Add Memory
      </Button>

      <View style={styles.logList}>
        {stuffie.questLog && stuffie.questLog.length > 0 ? (
          stuffie.questLog.map((entry) => (
            <QuestLogEntry
              key={entry.id}
              entry={entry}
              onDelete={handleDeleteEntry}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>
            No quest memories have been recorded yet.
          </Text>
        )}
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

  input: {
    marginBottom: theme.custom.spacing.md,
  },

  button: {
    borderRadius: theme.custom.radius.md,
  },

  logList: {
    marginTop: theme.custom.spacing.lg,
  },

  emptyText: {
    color: theme.custom.colors.textSecondary,

    textAlign: "center",

    marginTop: theme.custom.spacing.lg,
  },
});
