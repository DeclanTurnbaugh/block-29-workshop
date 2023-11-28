import { useState, useEffect } from "react";
import SinglePuppy from "./SinglePuppy/SinglePuppy";

export default function AllPlayers() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players")
      .then((response) => response.json())
      .then((data) => {
        setPuppies(data.data.players);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="puppy-contain">
      {puppies.map((puppy) => {
        return <SinglePuppy key={puppy.id} puppy={puppy} />;
      })}
    </div>
  );
}
