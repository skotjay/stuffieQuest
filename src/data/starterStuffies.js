const starterStuffies = [
  {
    id: "1",

    name: "Sir Buttonwhisker",

    beingType: "Cat",

    questRole: "Comfort Mage",

    bondLevel: 9,

    currentStatus: "Traveling",

    rarity: "Rare",

    personalityTraits: ["Loyal", "Sleepy", "Protective"],

    hometown: "Portland, OR",

    acquiredLocation: {
      store: "Powell's Books",
      latitude: 45.5231,
      longitude: -122.6819,
    },

    barterValue: 18.99,

    joinedDate: "2026-06-08",

    originStory:
      "Sir Buttonwhisker joined the quest during a rainy bookstore expedition.",

    imageUri: "",

    favorite: true,

    questLog: [
      {
        id: "q1",
        date: "2026-06-08",
        text: "Joined the party after surviving the bookstore maze.",
      },
    ],
  },

  {
    id: "2",

    name: "Professor Fern",

    beingType: "Dragon",

    questRole: "Guardian",

    bondLevel: 8,

    currentStatus: "At Home",

    rarity: "Epic",

    personalityTraits: ["Calm", "Brave", "Clever"],

    hometown: "Seattle, WA",

    acquiredLocation: {
      store: "University District Market",
      latitude: 47.661,
      longitude: -122.313,
    },

    barterValue: 26.5,

    joinedDate: "2025-12-17",

    originStory:
      "Professor Fern was recruited after proving exceptional wisdom.",

    imageUri: "",

    favorite: false,

    questLog: [
      {
        id: "q2",
        date: "2025-12-18",
        text: "Guarded the quest inventory while traveling.",
      },
    ],
  },

  {
    id: "3",

    name: "Mufflemode",

    beingType: "Bear",

    questRole: "Healer",

    bondLevel: 10,

    currentStatus: "On Display",

    rarity: "Legendary",

    personalityTraits: ["Loyal", "Calm", "Protective"],

    hometown: "Renton, WA",

    acquiredLocation: {
      store: "Local Gift Shop",
      latitude: 47.4829,
      longitude: -122.2171,
    },

    barterValue: 42.0,

    joinedDate: "2024-03-12",

    originStory:
      "Mufflemode entered the party and immediately became the emotional support healer.",

    imageUri: "",

    favorite: true,

    questLog: [
      {
        id: "q3",
        date: "2024-03-15",
        text: "Reached maximum bond level.",
      },
    ],
  },
];

export default starterStuffies;
