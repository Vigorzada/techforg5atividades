import React, { useState } from "react";

export default function Saudacao({ nomeInicial }) {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h2>Olá, {nome}!</h2>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
    </div>
  );
}
