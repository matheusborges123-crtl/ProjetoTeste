"use client";
import { useState } from "react";
export default function Lista() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([""]);

  function adicionarItem() {
    if (texto === "") {
      return;
    }
    setItens([...itens, texto]);

    setTexto("");
  }

  function limparItens() {
    setItens([""]);
  }

  return (
    <main className="flex justify-center items-center gap-3 h-screen">
      <section className="flex gap-10  flex-col items-center">
        <h1 className="text-xl font-bold text-zinc-400">Carrinho para compras!</h1>
        <div className="flex gap-5">
          <input
            value={texto}
            type="text"
            className="bg-zinc-300 text-black p-4 rounded-2xl"
            placeholder="batata"
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                adicionarItem();
              }
            }}
          />

          <button
            onClick={() => adicionarItem()}
            className="rounded-md bg-blue-500 font-bold hover:bg-blue-700 text-white"
          >
            ADICIONAR
          </button>
          <button
            onClick={() => limparItens()}
            className="rounded-md bg-red-500 font-bold hover:bg-purple-700 text-white"
          >
            DELETAR LISTA
          </button>
        </div>
        <div className="text-zinc-200 font-black text-2xl">ITENS:</div>

        {itens.map((el, key) => {
          return <div key={key}>{el}</div>;

        })}
      </section>
    </main>
  );
}
