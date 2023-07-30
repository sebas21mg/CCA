import { Link } from "react-router-dom";

export default function IncomeBtn() {
  return (
    <Link to={"/income"}>
      <span className="material-icons-round font-bold text-6xl text-blue-800 fixed end-2 bottom-2">add_circle</span>
    </Link>
  );
}
