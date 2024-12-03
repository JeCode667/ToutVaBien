import "./App.css";
import Question from "./components/Questions/Questions";
import questionTree from "./data/QuestionTree";

function App() {
  return (
    <div className="App">
      <Question questionTree={questionTree} />
    </div>
  );
}

export default App;
