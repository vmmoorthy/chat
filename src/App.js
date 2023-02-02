
import './App.css';
import { CkComponents } from "sova-chatkit"

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <CkComponents.ChatIt ckStore={true} />


    </div>
  );
}

export default App;
