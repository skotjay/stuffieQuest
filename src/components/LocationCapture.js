import { StyleSheet, View } from "react-native";

import { Button, Text } from "react-native-paper";

import useLocation from "../hooks/useLocation";

import theme from "../assets/theme";

export default function LocationCapture({ location, onLocationCaptured }) {
  const { getCurrentLocation, isGettingLocation } = useLocation();

  async function handleCaptureLocation() {
    const capturedLocation = await getCurrentLocation();

    if (capturedLocation) {
      onLocationCaptured(capturedLocation);
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.label}>
        Acquisition Location
      </Text>

      {location ? (
        <View style={styles.locationBox}>
          <Text style={styles.locationText}>Latitude: {location.latitude}</Text>

          <Text style={styles.locationText}>
            Longitude: {location.longitude}
          </Text>
        </View>
      ) : (
        <Text style={styles.emptyText}>No GPS location captured yet.</Text>
      )}

      <Button
        mode="contained-tonal"
        onPress={handleCaptureLocation}
        loading={isGettingLocation}
        disabled={isGettingLocation}
        style={styles.button}
      >
        Capture Current Location
      </Button>
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

  locationBox: {
    padding: theme.custom.spacing.md,

    borderRadius: theme.custom.radius.md,

    backgroundColor: theme.custom.colors.surface,

    borderWidth: 1,

    borderColor: theme.custom.colors.border,

    marginBottom: theme.custom.spacing.md,
  },

  locationText: {
    color: theme.custom.colors.text,
  },

  emptyText: {
    color: theme.custom.colors.textSecondary,

    marginBottom: theme.custom.spacing.md,
  },

  button: {
    borderRadius: theme.custom.radius.md,
  },
});
