import { useMemo, useState } from "react";

export default function useSearchAndFilter(stuffies) {
  const [searchText, setSearchText] = useState("");

  const [selectedType, setSelectedType] = useState("All");

  const [selectedTrait, setSelectedTrait] = useState("All");

  const [selectedRarity, setSelectedRarity] = useState("All");

  const [selectedRole, setSelectedRole] = useState("All");

  const filteredStuffies = useMemo(() => {
    return stuffies.filter((stuffie) => {
      const search = searchText.toLowerCase();

      const nameMatch = stuffie.name.toLowerCase().includes(search);

      const typeMatch = stuffie.beingType.toLowerCase().includes(search);

      const roleMatch = stuffie.questRole.toLowerCase().includes(search);

      const rarityMatch = stuffie.rarity.toLowerCase().includes(search);

      const traitMatch = stuffie.personalityTraits.some((trait) =>
        trait.toLowerCase().includes(search),
      );

      const matchesSearch =
        searchText.length === 0 ||
        nameMatch ||
        typeMatch ||
        roleMatch ||
        rarityMatch ||
        traitMatch;

      const matchesType =
        selectedType === "All" || stuffie.beingType === selectedType;

      const matchesTrait =
        selectedTrait === "All" ||
        stuffie.personalityTraits.includes(selectedTrait);

      const matchesRarity =
        selectedRarity === "All" || stuffie.rarity === selectedRarity;

      const matchesRole =
        selectedRole === "All" || stuffie.questRole === selectedRole;

      return (
        matchesSearch &&
        matchesType &&
        matchesTrait &&
        matchesRarity &&
        matchesRole
      );
    });
  }, [
    stuffies,
    searchText,
    selectedType,
    selectedTrait,
    selectedRarity,
    selectedRole,
  ]);

  function clearFilters() {
    setSearchText("");
    setSelectedType("All");
    setSelectedTrait("All");
    setSelectedRarity("All");
    setSelectedRole("All");
  }

  return {
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
  };
}
