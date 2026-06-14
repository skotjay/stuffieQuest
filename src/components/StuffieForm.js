import { View, StyleSheet, ScrollView } from "react-native";

import { TextInput, Button } from "react-native-paper";

import { useState } from "react";

import { questRoles, rarityLevels, statusOptions } from "../assets/theme";

import FilterButton from "./FilterButton";
import PhotoPicker from "./PhotoPicker";
import LocationCapture from "./LocationCapture";

import theme from "../assets/theme";

export default function StuffieForm({ initialValues, onSubmit }) {
  const [name, setName] = useState(initialValues?.name || "");

  const [beingType, setBeingType] = useState(initialValues?.beingType || "");

  const [bondLevel, setBondLevel] = useState(
    String(initialValues?.bondLevel || 1),
  );

  const [questRole, setQuestRole] = useState(
    initialValues?.questRole || "Guardian",
  );

  const [rarity, setRarity] = useState(initialValues?.rarity || "Common");

  const [status, setStatus] = useState(
    initialValues?.currentStatus || "At Home",
  );

  const [originStory, setOriginStory] = useState(
    initialValues?.originStory || "",
  );

  const [barterValue, setBarterValue] = useState(
    String(initialValues?.barterValue || ""),
  );

  const [imageUri, setImageUri] = useState(initialValues?.imageUri || "");

  const [location, setLocation] = useState(
    initialValues?.acquiredLocation || null,
  );

  function handleSave() {
    const stuffie = {
      ...initialValues,

      name,

      beingType,

      bondLevel: Number(bondLevel),

      questRole,

      rarity,

      currentStatus: status,

      originStory,

      barterValue: Number(barterValue),

      imageUri,

      acquiredLocation: location,
    };

    onSubmit(stuffie);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Stuffie Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        label="Being Type"
        value={beingType}
        onChangeText={setBeingType}
        style={styles.input}
      />

      <TextInput
        label="Bond Level (1–10)"
        value={bondLevel}
        onChangeText={setBondLevel}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        label="Barter Value"
        value={barterValue}
        onChangeText={setBarterValue}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        label="Origin Story"
        value={originStory}
        onChangeText={setOriginStory}
        multiline
        numberOfLines={4}
        style={styles.input}
      />

      <View style={styles.filterRow}>
        <FilterButton
          title="Role"
          options={questRoles}
          selectedValue={questRole}
          onSelect={setQuestRole}
        />

        <FilterButton
          title="Rarity"
          options={rarityLevels}
          selectedValue={rarity}
          onSelect={setRarity}
        />
      </View>

      <FilterButton
        title="Status"
        options={statusOptions}
        selectedValue={status}
        onSelect={setStatus}
      />

      <PhotoPicker imageUri={imageUri} onImageSelected={setImageUri} />

      <LocationCapture location={location} onLocationCaptured={setLocation} />

      <Button mode="contained" onPress={handleSave}>
        Save Stuffie
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.custom.spacing.lg,

    paddingBottom: 120,
  },

  input: {
    marginBottom: theme.custom.spacing.md,
  },

  filterRow: {
    flexDirection: "row",

    flexWrap: "wrap",

    marginBottom: theme.custom.spacing.md,
  },
});
