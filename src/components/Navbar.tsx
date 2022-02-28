import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/Buses"}>
        <div> Buses </div>
      </Link>
      <Link to={"/Paradas"}>
        <div>Paradas</div>
      </Link>

      <Link to={"/"}>
        <div>IDK</div>
      </Link>
    </div>
  );
}
