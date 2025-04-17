import React, { useState } from "react";

export default function ListaTarefas({ tarefasIniciais }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div>
      <ul>
        {tarefas.map((tarefa, i) => (
          <li key={i}>{tarefa}</li>
        ))}
      </ul>
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}
