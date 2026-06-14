import { ScrollView, StyleSheet, View } from "react-native";

import { Text, Card, Button, Divider } from "react-native-paper";

import useStuffies from "../hooks/useStuffies";

import theme from "../assets/theme";

export default function SettingsScreen() {
  const { totalStuffies, averageBondLevel, resetAllStuffies } = useStuffies();

  async function handleReset() {
    await resetAllStuffies();
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text variant="headlineMedium" style={styles.title}>
        Settings
      </Text>

      <Text style={styles.subtitle}>Manage your Stuffie Quest experience.</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.section}>
            Collection Statistics
          </Text>

          <Text style={styles.text}>Total Stuffies: {totalStuffies}</Text>

          <Text style={styles.text}>
            Average Bond Level: {averageBondLevel}/10
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.section}>
            Theme
          </Text>

          <Text style={styles.text}>Active Theme: Stuffie Quest Light</Text>

          <Text style={styles.helper}>
            Theme customization may be added in future versions.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.section}>
            Storage
          </Text>

          <Text style={styles.helper}>
            Stuffies are stored locally using AsyncStorage and automatically
            saved whenever changes occur.
          </Text>

          <Divider style={styles.divider} />

          <Button mode="contained-tonal" onPress={handleReset}>
            Reset Collection
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.section}>
            About
          </Text>

          <Text style={styles.helper}>
            Stuffie Quest catalogs stuffed companions as members of a life quest
            and records their stories, portraits, memories, and origins.
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Stuffie Quest</Text>

        <Text style={styles.footerVersion}>Version 1.0</Text>
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

  title: {
    color: theme.custom.colors.primary,

    fontWeight: "800",

    marginBottom: theme.custom.spacing.sm,
  },

  subtitle: {
    color: theme.custom.colors.textSecondary,

    marginBottom: theme.custom.spacing.lg,
  },

  card: {
    marginBottom: theme.custom.spacing.lg,

    borderRadius: theme.custom.radius.lg,

    backgroundColor: theme.custom.colors.surface,
  },

  section: {
    marginBottom: theme.custom.spacing.sm,

    color: theme.custom.colors.text,
  },

  text: {
    color: theme.custom.colors.text,

    marginBottom: theme.custom.spacing.sm,
  },

  helper: {
    color: theme.custom.colors.textSecondary,

    lineHeight: 22,
  },

  divider: {
    marginVertical: theme.custom.spacing.md,
  },

  footer: {
    alignItems: "center",

    marginTop: theme.custom.spacing.lg,
  },

  footerText: {
    color: theme.custom.colors.primary,

    fontWeight: "700",
  },

  footerVersion: {
    color: theme.custom.colors.textSecondary,
  },
});
