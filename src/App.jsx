import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return <div className="App"></div>;
}

export default App;
