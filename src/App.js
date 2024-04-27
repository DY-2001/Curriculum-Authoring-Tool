import { useState } from "react";
import Home from "./components/home/Home";
import topics from "./data/topicData";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./App.css";

function App() {
  const [topicsData, setTopicsData] = useState(topics);
  const { insertNode } = useTraverseTree();
  return (
    <div className="App">
      <Home
        topicsData={topicsData}
        setTopicsData={setTopicsData}
        insertNode={insertNode}
      />
    </div>
  );
}

export default App;
