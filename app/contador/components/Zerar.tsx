"use client";

import ContadorContext from "@/app/context/ContadorContext";
import { useContext } from "react";

export default function Zerar() {
  const {zerar} = useContext(ContadorContext);
  return (
    <div className="flex hover:bg-zinc-700 cursor-pointer justify-center items-center text-5xl bg-zinc-400  w-20 h-20 rounded-full p-3">
      <button onClick={() => zerar() }>0</button>
    </div>
  );
}
