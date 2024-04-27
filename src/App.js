import { useState } from "react";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  const [topics, setTopics] = useState(["dsf", "dsf", "df", "dsf"]);
  return (
    <div className="App">
      <Home topics={topics} setTopics={setTopics} />
    </div>
  );
}

export default App;
