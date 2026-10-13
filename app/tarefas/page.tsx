"use client";

import { useEffect, useState } from "react";

export default function Lista() {
  const [texto, setTexto] = useState("");
  const [id, setId] = useState(0);
  const [carregado, setCarregado] = useState(false);
  const [filtro, setFiltro] = useState("todas");

  const [itens, setItens] = useState<
    {
      id: number;
      texto: string;
      concluida: boolean;
    }[]
  >([]);

  const tarefasJSON = JSON.stringify(itens);

  useEffect(() => {
    if (carregado === true) {
      localStorage.setItem("tarefas", tarefasJSON);
    }
  }, [itens, carregado, tarefasJSON]);

  useEffect(() => {
    const dados = localStorage.getItem("tarefas");

    if (dados !== null) {
      const tarefasSalvas = JSON.parse(dados);

      const maiorID = tarefasSalvas.reduce((acl: any, el: any) => {
        if (acl > el.id) {
          return acl;
        } else {
          return el.id;
        }
      }, 0);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItens(tarefasSalvas);

      setId(maiorID + 1);
    }

    setCarregado(true);
  }, []);

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

  const tarefasFiltradas =
    filtro === "pendentes"
      ? itens.filter((el) => !el.concluida)
      : filtro === "concluidas"
        ? itens.filter((el) => el.concluida)
        : itens;

  // const tarefasFiltradas = () => {

  //   if (filtro === "pendentes") {
  //     return itens.filter((el)=> !el.concluida )

  //   }

  //       else if (filtro === "concluidas") {
  //     return itens.filter((el)=> el.concluida)
  //   } else return itens;
  // };

  return (
    <main className="flex justify-center items-center gap-3 min-h-screen py-10">
      <section className="flex gap-10 flex-col items-center w-full max-w-5xl px-6">
        <h1 className="text-xl font-bold text-zinc-400">Lista de tarefas!</h1>

        <div className="flex flex-wrap justify-center gap-5">
          <input
            value={texto}
            type="text"
            className="bg-zinc-300 text-black p-4 rounded-2xl"
            placeholder="Estudar"
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                adicionarItem();
              }
            }}
          />

          <button
            onClick={() => adicionarItem()}
            className="rounded-md bg-blue-500 font-bold hover:bg-blue-700 text-white px-4 py-2"
          >
            ADICIONAR TAREFA
          </button>

          <button
            onClick={() => limparItens()}
            className="rounded-md bg-red-500 font-bold hover:bg-red-700 text-white px-4 py-2"
          >
            DELETAR LISTA
          </button>
        </div>

        <div className="text-zinc-200 font-black text-2xl">TAREFAS:</div>

        <div className="flex items-start gap-6 w-full">
          {/* Botões de filtro */}
          <div className="flex flex-col gap-4 shrink-0">
            <button
              onClick={() => setFiltro("todas")}
              className="bg-zinc-900 hover:bg-black cursor-pointer rounded-md p-3 font-bold text-white"
            >
              Mostrar Todas
            </button>
            <button
              onClick={() => setFiltro("pendentes")}
              className="bg-zinc-900 hover:bg-black cursor-pointer rounded-md p-3 font-bold text-white"
            >
              Mostrar Pendentes
            </button>

            <button
              onClick={() => setFiltro("concluidas")}
              className="bg-zinc-900 hover:bg-black cursor-pointer rounded-md p-3 font-bold text-white"
            >
              Mostrar Concluídas
            </button>
          </div>

          {/* Lista de tarefas */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {tarefasFiltradas.map((el) => {
              return (
                <div
                  key={el.id}
                  className="flex items-center justify-between gap-4 bg-zinc-800 rounded-xl p-4 w-full shadow-md"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <button
                      onClick={() => marcarConcluida(el.id)}
                      className="w-7 h-7 shrink-0 rounded-md border-2 border-zinc-400 flex items-center justify-center"
                    >
                      {el.concluida ? "✅" : ""}
                    </button>

                    <div
                      className={
                        el.concluida
                          ? "text-white font-bold line-through wrap-break-word"
                          : "text-white font-bold wrap-break-word"
                      }
                    >
                      {el.texto}
                    </div>
                  </div>

                  <button
                    onClick={() => removerItem(el.id)}
                    className="bg-red-400 hover:bg-red-500 rounded-2xl px-4 py-3 font-bold shrink-0"
                  >
                    REMOVER TAREFA
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
