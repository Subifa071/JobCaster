import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { FirebaseProvider } from "./contexts/firebase";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <FirebaseProvider>
      <main>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Routes>
          <Route path='/register' exact element={<Register />} />
          <Route path='/Login' exact element={<Login />} />
        </Routes>
      </main>
    </FirebaseProvider>
  );
}

export default App;
