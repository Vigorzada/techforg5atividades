import React, { useState } from "react";

export default function CriarUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrar = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name: nome, email }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (!res.ok) throw new Error("Erro ao cadastrar");

      setMensagem("Usuário cadastrado com sucesso!");
    } catch (e) {
      setMensagem(e.message);
    }
  };

  return (
    <div>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={cadastrar}>Cadastrar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
