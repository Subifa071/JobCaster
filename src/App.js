import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FirebaseProvider } from "./contexts/firebase";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <FirebaseProvider>
      <main>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </main>
    </FirebaseProvider>
  );
}

export default App;
