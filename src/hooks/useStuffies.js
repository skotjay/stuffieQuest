import { useStuffieContext } from "../context/StuffieContext";

export default function useStuffies() {
  const {
    stuffies,
    isLoading,
    addStuffie,
    updateStuffie,
    deleteStuffie,
    getStuffieById,
    toggleFavorite,
    addQuestLogEntry,
    deleteQuestLogEntry,
    resetAllStuffies,
  } = useStuffieContext();

  const favoriteStuffies = stuffies.filter((stuffie) => stuffie.favorite);

  const totalStuffies = stuffies.length;

  const travelingStuffies = stuffies.filter(
    (stuffie) => stuffie.currentStatus === "Traveling",
  );

  const displayStuffies = stuffies.filter(
    (stuffie) => stuffie.currentStatus === "On Display",
  );

  const missingStuffies = stuffies.filter(
    (stuffie) => stuffie.currentStatus === "Missing",
  );

  function getStuffiesByType(beingType) {
    return stuffies.filter((stuffie) => stuffie.beingType === beingType);
  }

  function getStuffiesByRole(questRole) {
    return stuffies.filter((stuffie) => stuffie.questRole === questRole);
  }

  function getStuffiesByRarity(rarity) {
    return stuffies.filter((stuffie) => stuffie.rarity === rarity);
  }

  function getAverageBondLevel() {
    if (stuffies.length === 0) {
      return 0;
    }

    const totalBond = stuffies.reduce(
      (sum, stuffie) => sum + Number(stuffie.bondLevel),
      0,
    );

    return Math.round(totalBond / stuffies.length);
  }

  return {
    stuffies,
    isLoading,

    favoriteStuffies,
    travelingStuffies,
    displayStuffies,
    missingStuffies,

    totalStuffies,
    averageBondLevel: getAverageBondLevel(),

    addStuffie,
    updateStuffie,
    deleteStuffie,
    getStuffieById,
    toggleFavorite,
    addQuestLogEntry,
    deleteQuestLogEntry,
    resetAllStuffies,

    getStuffiesByType,
    getStuffiesByRole,
    getStuffiesByRarity,
  };
}
