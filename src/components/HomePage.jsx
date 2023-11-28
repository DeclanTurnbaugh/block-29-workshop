import AllPlayers from "./AllPlayers";
import NewPlayerForm from "./NewPlayerForm/NewPlayerForm";
import SinglePlayer from "./SinglePlayer/SinglePlayer";
import { Routes, Route } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/puppy/:id" element={<SinglePlayer />} />
        <Route path="/new-player-form" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}
