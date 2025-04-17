import { useParams, useNavigate } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Detalhes do Quarto {id}</h2>
      <button onClick={() => navigate("/success")}>Reservar</button>
    </div>
  );
}
