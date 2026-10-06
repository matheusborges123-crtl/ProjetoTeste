"use client";
import { useState } from "react";
export default function Lista() {
  const [texto, setTexto] = useState("");
  const [id, setId] = useState(0);
  const [itens, setItens] = useState<
    {
      id: number;
      texto: string;
      concluida: boolean;
    }[]
  >([]);

  function adicionarItem() {
    if (texto === "") {
      return;
    }
    setItens([
      ...itens,
      {
        id: id,
        texto: texto,
        concluida: false,
      },
    ]);

    setId(id + 1);

    setTexto("");
  }

  function limparItens() {
    setItens([]);
  }

  function marcarConcluida(id: number) {
    setItens(
      itens.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            concluida: !el.concluida,
          };
        } else {
          return el;
        }
      }),
    );
  }

  function removerItem(item: number) {
    setItens(
      itens.filter((el) => {
        return el.id !== item;
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
            placeholder="estudar"
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

        {itens.map((el) => {
          return (
            <div
              key={el.id}
              className="flex items-center justify-between bg-zinc-800 rounded-xl p-4 w-full shadow-md"
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => marcarConcluida(el.id)}
                  className="w-7 h-7 rounded-md border-2 border-zinc-400 flex items-center justify-center"
                >
                  {el.concluida ? "✅" : ""}
                </button>

                <div
                  className={
                    el.concluida ? "text-white font-bold line-through" : "text-white font-bold"
                  }
                >
                  {el.texto}
                </div>
              </div>

              <button
                onClick={() => removerItem(el.id)}
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
