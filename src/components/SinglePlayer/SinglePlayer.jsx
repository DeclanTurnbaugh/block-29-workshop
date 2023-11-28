import { useLocation, useNavigate } from "react-router-dom";
import "./SinglePlayer.css";

export default function SinglePlayer() {
  const location = useLocation();
  const navi = useNavigate();
  let teamIdText = "";

  location.state.teamId
    ? (teamIdText = " and their team is #" + location.state.teamId)
    : (teamIdText = " and they don't have a team");

  const handleDelete = () => {
    let text =
      "Please only delete puppies that are yours.\nAre you sure you want to do this?\nThis action cannot be undone";
    if (confirm(text)) {
      const deletePost = async () => {
        try {
          const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players/${location.state.id}`,
            {
              method: "DELETE",
            }
          );
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      };
      deletePost();
      navi("/");
    }
  };

  return (
    <div className="player-contain">
      <h1>{"This is " + location.state.name}</h1>
      <p>{"They are a " + location.state.breed}</p>
      <p>{"They are currently playing on the " + location.state.status}</p>
      <p>{"They belong to cohort #" + location.state.cohortId + teamIdText}</p>
      <p>{"This card was created at " + location.state.createdAt}</p>
      <p>{"This card was last updated at " + location.state.updatedAt}</p>
      <button onClick={handleDelete}>Delete?</button>
      <br />
      <img src={location.state.imageUrl} alt={location.state.breed} />
    </div>
  );
}
