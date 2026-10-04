"use client";

import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex items-center flex-col   gap-13">
        <div className="rounded-full bg-green-300 p-15 text-5xl  h-40 w-40 flex justify-center items-center">
          {valor}
        </div>
        <div className="flex justify-center gap-5">
          <button
            onClick={() => setValor(valor + 1)}
            className="rounded-full bg-blue-300  hover:bg-blue-700  p-4 text-5xl h-20 text-center w-20 "
          >
            +
          </button>

          <button
            onClick={() => setValor(0)}
            className="rounded-full bg-zinc-500 p-4 text-5xl h-20 text-center hover:bg-zinc-700 w-20 "
          >
            0
          </button>

          <button
            onClick={() => setValor(valor - 1)}
            className="rounded-full bg-red-300 p-4 text-5xl h-20 text-center w-20  hover:bg-red-700 "
          >
            -
          </button>
        </div>
      </section>
    </main>
  );
}
