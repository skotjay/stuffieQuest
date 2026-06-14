import StuffieForm from "../components/StuffieForm";

import useStuffies from "../hooks/useStuffies";

export default function AddStuffieScreen({ navigation }) {
  const { addStuffie } = useStuffies();

  function handleAddStuffie(stuffieData) {
    const newStuffie = {
      id: Date.now().toString(),

      ...stuffieData,

      joinedDate: new Date().toISOString().split("T")[0],

      favorite: false,

      personalityTraits: [],

      hometown: "",

      questLog: [],
    };

    addStuffie(newStuffie);

    navigation.navigate("StuffieList");
  }

  return <StuffieForm onSubmit={handleAddStuffie} />;
}
