import { useState } from "react";

import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState(null);

  const [permissionGranted, setPermissionGranted] = useState(false);

  const [isGettingLocation, setIsGettingLocation] = useState(false);

  async function requestPermission() {
    const result = await Location.requestForegroundPermissionsAsync();

    const granted = result.status === "granted";

    setPermissionGranted(granted);

    return granted;
  }

  async function getCurrentLocation() {
    try {
      setIsGettingLocation(true);

      const allowed = await requestPermission();

      if (!allowed) {
        setIsGettingLocation(false);
        return null;
      }

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const locationData = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        timestamp: currentLocation.timestamp,
      };

      setLocation(locationData);
      setIsGettingLocation(false);

      return locationData;
    } catch (error) {
      console.log("Location error:", error);

      setIsGettingLocation(false);

      return null;
    }
  }

  function clearLocation() {
    setLocation(null);
  }

  return {
    location,
    permissionGranted,
    isGettingLocation,
    getCurrentLocation,
    clearLocation,
    setLocation,
  };
}
