import "./SinglePuppy.css";
import { useNavigate } from "react-router-dom";

export default function SinglePuppy({ puppy }) {
  const navi = useNavigate();

  const grabPuppy = () => {
    navi(`/puppy/${puppy.id}`, {state:puppy});
  };

  return (
    <img src={puppy.imageUrl} alt={puppy.breed} className="img-single-puppy" onClick={() => grabPuppy()} />
  );
}
