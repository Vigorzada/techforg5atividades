import React, { useState } from "react";

export default function BuscarUsuario() {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState("");

  const buscar = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!res.ok) throw new Error("Usuário não encontrado");
      const data = await res.json();
      setUsuario(data);
      setErro("");
    } catch (e) {
      setUsuario(null);
      setErro(e.message);
    }
  };

  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID"
      />
      <button onClick={buscar}>Buscar</button>
      {usuario && (
        <div>
          <h3>{usuario.name}</h3>
          <p>{usuario.email}</p>
        </div>
      )}
      {erro && <p>{erro}</p>}
    </div>
  );
}
