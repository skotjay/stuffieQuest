import AsyncStorage from "@react-native-async-storage/async-storage";

import starterStuffies from "../data/starterStuffies";

const STORAGE_KEY = "stuffieQuestData";

export async function loadStuffies() {
  try {
    const savedStuffies = await AsyncStorage.getItem(STORAGE_KEY);

    if (!savedStuffies) {
      return starterStuffies;
    }

    return JSON.parse(savedStuffies);
  } catch (error) {
    console.log("Error loading Stuffies:", error);

    return starterStuffies;
  }
}

export async function saveStuffies(stuffieArray) {
  try {
    const jsonData = JSON.stringify(stuffieArray);

    await AsyncStorage.setItem(STORAGE_KEY, jsonData);

    return true;
  } catch (error) {
    console.log("Error saving Stuffies:", error);

    return false;
  }
}

export async function clearStuffies() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);

    return true;
  } catch (error) {
    console.log("Error clearing Stuffies:", error);

    return false;
  }
}

export async function resetStuffies() {
  try {
    await saveStuffies(starterStuffies);

    return starterStuffies;
  } catch (error) {
    console.log("Error resetting Stuffies:", error);

    return starterStuffies;
  }
}
