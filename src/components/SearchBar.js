import { StyleSheet } from "react-native";

import { Searchbar } from "react-native-paper";

import theme from "../assets/theme";

export default function SearchBar({ searchText, onChangeText }) {
  return (
    <Searchbar
      placeholder="Search Stuffies..."
      value={searchText}
      onChangeText={onChangeText}
      style={styles.searchBar}
      inputStyle={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: theme.custom.spacing.md,

    backgroundColor: theme.custom.colors.surface,

    borderRadius: theme.custom.radius.lg,
  },

  input: {
    color: theme.custom.colors.text,
  },
});
