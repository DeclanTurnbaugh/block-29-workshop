import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPlayerForm.css";

export default function NewPlayerForm() {
  const navi = useNavigate();
  const [inputs, setInputs] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data.data.players))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setInputs((vals) => ({ ...vals, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const randPosition = Math.floor(Math.random() * 2);
    const date = new Date();

    inputs.id = players.length + 1;
    randPosition ? (inputs.status = "field") : (inputs.status = "bench");
    inputs.teamId = 8;
    inputs.cohortId = 2308;
    inputs.createdAt = date.toISOString();
    inputs.updatedAt = date.toISOString();

    const componentMount = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs),
        };
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players",
          requestOptions
        );
        if (response.ok) {
          navi("/");
        }
      } catch (err) {
        console.error(err);
      }
    };

    componentMount();
  };

  return (
    <div className="form-contain">
      <form onSubmit={handleSubmit}>
        <label>
          {"Puppy Name: "}
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {"Breed: "}
          <input
            type="text"
            name="breed"
            value={inputs.breed || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {"Image Url: "}
          <input
            type="url"
            name="imageUrl"
            value={inputs.imageUrl || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
