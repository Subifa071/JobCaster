import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FirebaseProvider } from "./contexts/firebase";

function App() {
  return (
    <FirebaseProvider>
      <main>
        <Routes>
          <Route path='/register' element={<h1>Register</h1>}>
            <h1>Register</h1>
          </Route>
        </Routes>
      </main>
    </FirebaseProvider>
  );
}

export default App;
