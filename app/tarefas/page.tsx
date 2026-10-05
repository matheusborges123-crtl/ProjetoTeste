"use client";
import { useState } from "react";
export default function Lista() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState<string[]>([]);

  function adicionarItem() {
    if (texto === "") {
      return;
    }
    setItens([...itens, texto]);

    setTexto("");
  }

  function limparItens() {
    setItens([]);
  }

  function removerItem(item: string) {
    setItens(
      itens.filter((el: any) => {
        return el !== item;
      }),
    );
  }

  return (
    <main className="flex justify-center items-center gap-3 h-screen">
      <section className="flex gap-10  flex-col items-center">
        <h1 className="text-xl font-bold text-zinc-400">Lista de tarefas!</h1>
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
            ADICIONAR TAREFA
          </button>
          <button
            onClick={() => limparItens()}
            className="rounded-md bg-red-500 font-bold hover:bg-red-700 text-white"
          >
            DELETAR LISTA
          </button>
        </div>
        <div className="text-zinc-200 font-black text-2xl">TAREFAS:</div>

        {itens.map((el, key) => {
          return (
            <div
              key={key}
              className="flex items-center justify-between bg-zinc-800 rounded-xl p-4 w-full shadow-md"
            >
              <div className="bg-black rounded-md w-20 h-20 flex justify-center items-center font-bold">
                {el}
              </div>

              <button
                onClick={() => removerItem(el)}
                className="bg-red-400 hover:bg-red-500 rounded-2xl px-4 py-3 font-bold"
              >
                REMOVER TAREFA
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}
