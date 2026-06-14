import { createContext, useContext, useEffect, useState } from "react";

import {
  loadStuffies,
  saveStuffies,
  resetStuffies,
} from "../storage/stuffieStorage";

const StuffieContext = createContext();

export function StuffieProvider({ children }) {
  const [stuffies, setStuffies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSavedData() {
      const savedStuffies = await loadStuffies();

      setStuffies(savedStuffies);
      setIsLoading(false);
    }

    loadSavedData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveStuffies(stuffies);
    }
  }, [stuffies, isLoading]);

  function addStuffie(newStuffie) {
    setStuffies((currentStuffies) => [...currentStuffies, newStuffie]);
  }

  function updateStuffie(updatedStuffie) {
    setStuffies((currentStuffies) =>
      currentStuffies.map((stuffie) =>
        stuffie.id === updatedStuffie.id ? updatedStuffie : stuffie,
      ),
    );
  }

  function deleteStuffie(stuffieId) {
    setStuffies((currentStuffies) =>
      currentStuffies.filter((stuffie) => stuffie.id !== stuffieId),
    );
  }

  function getStuffieById(stuffieId) {
    return stuffies.find((stuffie) => stuffie.id === stuffieId);
  }

  function toggleFavorite(stuffieId) {
    setStuffies((currentStuffies) =>
      currentStuffies.map((stuffie) =>
        stuffie.id === stuffieId
          ? {
              ...stuffie,
              favorite: !stuffie.favorite,
            }
          : stuffie,
      ),
    );
  }

  function addQuestLogEntry(stuffieId, newEntry) {
    setStuffies((currentStuffies) =>
      currentStuffies.map((stuffie) =>
        stuffie.id === stuffieId
          ? {
              ...stuffie,
              questLog: [...stuffie.questLog, newEntry],
            }
          : stuffie,
      ),
    );
  }

  function deleteQuestLogEntry(stuffieId, entryId) {
    setStuffies((currentStuffies) =>
      currentStuffies.map((stuffie) =>
        stuffie.id === stuffieId
          ? {
              ...stuffie,
              questLog: stuffie.questLog.filter(
                (entry) => entry.id !== entryId,
              ),
            }
          : stuffie,
      ),
    );
  }

  async function resetAllStuffies() {
    const resetData = await resetStuffies();

    setStuffies(resetData);
  }

  const value = {
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
  };

  return (
    <StuffieContext.Provider value={value}>{children}</StuffieContext.Provider>
  );
}

export function useStuffieContext() {
  return useContext(StuffieContext);
}
