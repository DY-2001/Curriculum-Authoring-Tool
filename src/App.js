import { useState } from "react";
import Home from "./components/home/Home";
import topics from "./data/topicData";
import "./App.css";

function App() {
  const [topicsData, setTopicsData] = useState(topics);
  return (
    <div className="App">
      <Home topicsData={topicsData} setTopicsData={setTopicsData} />
    </div>
  );
}

export default App;
