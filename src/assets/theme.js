import { MD3LightTheme } from "react-native-paper";

const colors = {
  primary: "#7B4AE2",
  secondary: "#B89EFF",

  background: "#F7F2FF",
  surface: "#FFFFFF",

  accent: "#F6B73C",

  success: "#77C66E",
  warning: "#E9A53F",
  error: "#D64545",

  text: "#2E2442",
  textSecondary: "#6D6780",

  border: "#DDD4F5",

  rarityCommon: "#CFCFCF",
  rarityUncommon: "#7FD38A",
  rarityRare: "#4CA6FF",
  rarityEpic: "#D76EFF",
  rarityLegendary: "#F7C84B",

  statusHome: "#9AC8FF",
  statusTraveling: "#69D29C",
  statusRetired: "#BFAFA0",
  statusMissing: "#FF8B8B",
  statusDisplay: "#B68BFF",
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const radius = {
  sm: 8,
  md: 14,
  lg: 22,
  xl: 32,
};

const typography = {
  titleLarge: {
    fontSize: 28,
    fontWeight: "700",
  },

  titleMedium: {
    fontSize: 22,
    fontWeight: "600",
  },

  bodyLarge: {
    fontSize: 18,
  },

  bodyMedium: {
    fontSize: 16,
  },

  bodySmall: {
    fontSize: 14,
  },

  caption: {
    fontSize: 12,
    color: colors.textSecondary,
  },
};

export const questRoles = [
  "Guardian",
  "Healer",
  "Scout",
  "Bard",
  "Comfort Mage",
  "Chaos Goblin",
];

export const stuffieTypes = [
  "Cat",
  "Dog",
  "Dragon",
  "Bear",
  "Rabbit",
  "Fox",
  "Bird",
  "Dinosaur",
  "Monster",
  "Other",
];

export const rarityLevels = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];

export const statusOptions = [
  "At Home",
  "Traveling",
  "Retired",
  "Missing",
  "On Display",
];

export const traitOptions = [
  "Loyal",
  "Sleepy",
  "Protective",
  "Brave",
  "Goofy",
  "Clever",
  "Energetic",
  "Curious",
  "Calm",
  "Chaotic",
];

export const theme = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,

    primary: colors.primary,
    secondary: colors.secondary,

    background: colors.background,
    surface: colors.surface,

    error: colors.error,

    onBackground: colors.text,
    onSurface: colors.text,
  },

  custom: {
    colors,
    spacing,
    radius,
    typography,
  },
};

export default theme;
