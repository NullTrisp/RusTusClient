import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/buses"}>
        <div> Buses </div>
      </Link>
      <Link to={"/Stops"}>
        <div>Paradas</div>
      </Link>

      <Link to={"/"}>
        <div>IDK</div>
      </Link>
    </div>
  );
}
