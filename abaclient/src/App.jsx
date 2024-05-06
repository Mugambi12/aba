import { useState } from "react";
import Background from "./Components/Background/Background";

const App = () => {
  let heroData = [
    { text1: "Welcome to", text2: "ABA" },
    { text1: "Client Portal", text2: "We are here to help you" },
    { text1: "Biodiversity", text2: "We are here to help you" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App;
