import "../src/css/_base.scss";
import List from "./features/list/List";
import { videosTitles } from "../src/features/videosList/videosList";
import { useState } from "react";
import NavBar from "./features/navBar/NavBar";
import Header from "./features/home/Home";

function App() {
  const [text, setText] = useState("");
  const textLowered = text.trim().toLowerCase();
  const filteredVideos =
    text === ""
      ? videosTitles
      : videosTitles.filter((video) => handleFilter(video, textLowered));

  function handleFilter(video, text) {
    return video.title.toLowerCase().includes(text);
  }

  return (
    <div className="App">
      <NavBar setText={setText} />
      <Header />
      <List videos={filteredVideos} />
    </div>
  );
}

export default App;
