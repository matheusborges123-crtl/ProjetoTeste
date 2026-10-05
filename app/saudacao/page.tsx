"use client";
import { useEffect, useState } from "react";

export default function Saudacao() {
  const [texto, setTexto] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setNome(texto);
    }, 3000);
    return () => clearTimeout(timer);
  }, [texto]);

  return (
    <main className="flex items-center justify-center h-screen">
      <section className=" flex flex-col items-center gap-6">
        <h1 className="text-xl font-bold">INSIRA O SEU NOME ABAIXO</h1>
        <input
          type="text"
          onChange={(e) => setTexto(e.target.value)}
          className="bg-zinc-300 text-black"
          placeholder="Matheus67"
        />

        <div>{nome !== "" ? `Ola, ${nome}!` : "OLA!"}</div>
      </section>
    </main>
  );
}
