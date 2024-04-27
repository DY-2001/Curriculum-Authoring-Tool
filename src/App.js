import React, { useState } from "react";
import Home from "./components/home/Home";
import topics from "./data/topicData";
import "./App.css";

export const TopicContext = React.createContext();

function App() {
  const [topicsData, setTopicsData] = useState(topics);
  return (
    <div className="App">
      <TopicContext.Provider value={topicsData}>
        <Home />
      </TopicContext.Provider>
    </div>
  );
}

export default App;
