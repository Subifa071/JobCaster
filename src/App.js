import "./App.css";
import { FirebaseProvider } from "./contexts/firebase";

function App() {
  return (
    <FirebaseProvider>
      <h1>JobCaster</h1>
    </FirebaseProvider>
  );
}

export default App;
