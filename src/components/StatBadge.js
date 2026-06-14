import { StyleSheet } from "react-native";

import { Chip } from "react-native-paper";

import theme from "../assets/theme";

export default function StatBadge({ label, type = "default" }) {
  function getBadgeColor() {
    switch (type) {
      case "Common":
        return theme.custom.colors.rarityCommon;

      case "Uncommon":
        return theme.custom.colors.rarityUncommon;

      case "Rare":
        return theme.custom.colors.rarityRare;

      case "Epic":
        return theme.custom.colors.rarityEpic;

      case "Legendary":
        return theme.custom.colors.rarityLegendary;

      case "At Home":
        return theme.custom.colors.statusHome;

      case "Traveling":
        return theme.custom.colors.statusTraveling;

      case "Retired":
        return theme.custom.colors.statusRetired;

      case "Missing":
        return theme.custom.colors.statusMissing;

      case "On Display":
        return theme.custom.colors.statusDisplay;

      default:
        return theme.custom.colors.secondary;
    }
  }

  return (
    <Chip
      style={[
        styles.badge,
        {
          backgroundColor: getBadgeColor(),
        },
      ]}
      textStyle={styles.text}
    >
      {label}
    </Chip>
  );
}

const styles = StyleSheet.create({
  badge: {
    marginRight: theme.custom.spacing.sm,

    marginBottom: theme.custom.spacing.sm,
  },

  text: {
    color: theme.custom.colors.text,

    fontWeight: "600",
  },
});
