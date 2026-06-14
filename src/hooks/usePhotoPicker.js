import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

export default function usePhotoPicker() {
  const [imageUri, setImageUri] = useState("");

  const [permissionGranted, setPermissionGranted] = useState(false);

  async function requestPermission() {
    const result = await ImagePicker.requestCameraPermissionsAsync();

    const granted = result.status === "granted";

    setPermissionGranted(granted);

    return granted;
  }

  async function openCamera() {
    try {
      const allowed = await requestPermission();

      if (!allowed) {
        return null;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        aspect: [1, 1],

        quality: 0.8,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;

        setImageUri(selectedImage);

        return selectedImage;
      }

      return null;
    } catch (error) {
      console.log("Camera error:", error);

      return null;
    }
  }

  async function openGallery() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        aspect: [1, 1],

        quality: 0.8,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;

        setImageUri(selectedImage);

        return selectedImage;
      }

      return null;
    } catch (error) {
      console.log("Gallery error:", error);

      return null;
    }
  }

  function clearPhoto() {
    setImageUri("");
  }

  return {
    imageUri,

    permissionGranted,

    openCamera,

    openGallery,

    clearPhoto,

    setImageUri,
  };
}
