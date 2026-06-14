import { View, StyleSheet } from "react-native";

import { Button, Menu } from "react-native-paper";

import { useState } from "react";

import theme from "../assets/theme";

export default function FilterButton({
  title,
  options,
  selectedValue,
  onSelect,
}) {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }

  function selectOption(value) {
    onSelect(value);

    closeMenu();
  }

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            mode="contained-tonal"
            onPress={openMenu}
            style={styles.button}
          >
            {title}: {selectedValue}
          </Button>
        }
      >
        <Menu.Item title="All" onPress={() => selectOption("All")} />

        {options.map((option) => (
          <Menu.Item
            key={option}
            title={option}
            onPress={() => selectOption(option)}
          />
        ))}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: theme.custom.spacing.sm,

    marginBottom: theme.custom.spacing.sm,
  },

  button: {
    borderRadius: theme.custom.radius.md,
  },
});
