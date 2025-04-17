import { Link } from "react-router-dom";

export default function Rooms() {
  const quartos = [1, 2, 3];
  return (
    <div>
      <h1>Quartos</h1>
      {quartos.map((id) => (
        <Link key={id} to={`/room/${id}`}>
          Ver Quarto {id}
        </Link>
      ))}
    </div>
  );
}
