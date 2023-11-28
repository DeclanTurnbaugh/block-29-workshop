import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
