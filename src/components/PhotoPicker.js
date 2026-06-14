import { Image, StyleSheet, View } from "react-native";

import { Button, Text } from "react-native-paper";

import usePhotoPicker from "../hooks/usePhotoPicker";

import theme from "../assets/theme";

export default function PhotoPicker({ imageUri, onImageSelected }) {
  const { openCamera, openGallery } = usePhotoPicker();

  async function handleCameraPress() {
    const selectedImage = await openCamera();

    if (selectedImage) {
      onImageSelected(selectedImage);
    }
  }

  async function handleGalleryPress() {
    const selectedImage = await openGallery();

    if (selectedImage) {
      onImageSelected(selectedImage);
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.label}>
        Stuffie Portrait
      </Text>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No portrait selected</Text>
        </View>
      )}

      <View style={styles.buttonRow}>
        <Button
          mode="contained"
          onPress={handleCameraPress}
          style={styles.button}
        >
          Take Photo
        </Button>

        <Button
          mode="outlined"
          onPress={handleGalleryPress}
          style={styles.button}
        >
          Choose Photo
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.custom.spacing.lg,
  },

  label: {
    marginBottom: theme.custom.spacing.sm,

    color: theme.custom.colors.text,
  },

  image: {
    width: "100%",
    height: 240,

    borderRadius: theme.custom.radius.lg,

    marginBottom: theme.custom.spacing.md,
  },

  placeholder: {
    width: "100%",
    height: 240,

    borderRadius: theme.custom.radius.lg,

    backgroundColor: theme.custom.colors.border,

    alignItems: "center",

    justifyContent: "center",

    marginBottom: theme.custom.spacing.md,
  },

  placeholderText: {
    color: theme.custom.colors.textSecondary,
  },

  buttonRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    gap: theme.custom.spacing.sm,
  },

  button: {
    flex: 1,
  },
});
