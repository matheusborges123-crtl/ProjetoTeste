"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [tempo, setTempo] = useState(10);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (rodando === false) {
      return;
    }
    if (tempo === 0) {
      return;
    }

    const contagem = setInterval(() => {
      setTempo((tempo) => tempo - 1);
    }, 1000);

    return () => clearInterval(contagem);
  }, [rodando, tempo]);

  function inciar() {
    setRodando(true);
  }

  function pausar() {
    setRodando(false);
  }

  function resetar() {
    setRodando(false);
    setTempo(10);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <div className="bg-zinc-700 text-white rounded-4xl text-4xl font-bold flex justify-center items-center h-28 w-28">
        {tempo}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => inciar()}
          className="font-black bg-green-500 hover:bg-green-700 rounded-md px-5 py-3"
        >
          INICIAR
        </button>

        <button
          onClick={() => pausar()}
          className="font-black bg-purple-500 hover:bg-purple-700 rounded-md px-5 py-3"
        >
          PAUSAR
        </button>

        <button
          onClick={() => resetar()}
          className="font-black bg-red-500 hover:bg-red-700 rounded-md px-5 py-3"
        >
          RESETAR
        </button>
      </div>
    </div>
  );
}
