import { View, StyleSheet, ScrollView } from "react-native";

import { Button } from "react-native-paper";

import useStuffies from "../hooks/useStuffies";
import useSearchAndFilter from "../hooks/useSearchAndFilter";

import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import StuffieList from "../components/StuffieList";

import {
  questRoles,
  rarityLevels,
  stuffieTypes,
  traitOptions,
} from "../assets/theme";

import theme from "../assets/theme";

export default function StuffieListScreen({ navigation }) {
  const { stuffies, toggleFavorite } = useStuffies();

  const {
    searchText,
    setSearchText,

    selectedType,
    setSelectedType,

    selectedTrait,
    setSelectedTrait,

    selectedRarity,
    setSelectedRarity,

    selectedRole,
    setSelectedRole,

    filteredStuffies,
    clearFilters,
  } = useSearchAndFilter(stuffies);

  function handleOpenDetails(stuffieId) {
    navigation.navigate("StuffieDetails", { stuffieId });
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topArea}>
        <SearchBar searchText={searchText} onChangeText={setSearchText} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
        >
          <FilterButton
            title="Type"
            options={stuffieTypes}
            selectedValue={selectedType}
            onSelect={setSelectedType}
          />

          <FilterButton
            title="Trait"
            options={traitOptions}
            selectedValue={selectedTrait}
            onSelect={setSelectedTrait}
          />

          <FilterButton
            title="Rarity"
            options={rarityLevels}
            selectedValue={selectedRarity}
            onSelect={setSelectedRarity}
          />

          <FilterButton
            title="Role"
            options={questRoles}
            selectedValue={selectedRole}
            onSelect={setSelectedRole}
          />

          <Button mode="text" onPress={clearFilters}>
            Clear
          </Button>
        </ScrollView>
      </View>

      <View style={styles.listArea}>
        <StuffieList
          stuffies={filteredStuffies}
          onPressStuffie={handleOpenDetails}
          onFavoriteStuffie={toggleFavorite}
          emptyMessage="No Stuffies match your search."
        />
      </View>

      <Button
        mode="contained"
        style={styles.addButton}
        onPress={() => navigation.navigate("AddStuffie")}
      >
        Add Stuffie
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: theme.custom.colors.background,

    padding: theme.custom.spacing.md,
  },

  topArea: {
    marginBottom: theme.custom.spacing.sm,
  },

  filterScroll: {
    marginBottom: theme.custom.spacing.sm,
  },

  listArea: {
    flex: 1,
  },

  addButton: {
    marginTop: theme.custom.spacing.md,

    borderRadius: theme.custom.radius.md,
  },
});
