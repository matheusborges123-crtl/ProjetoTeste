"use client";

import ContadorContext from "@/app/context/ContadorContext";
import { useContext } from "react";

export default function Mais() {
  const { incrementar } = useContext(ContadorContext);

  return (
    <div className="flex hover:bg-green-700 cursor-pointer justify-center items-center text-5xl bg-green-400 w-20 h-20 rounded-full  p-3">
      <button onClick={() => incrementar()}>+</button>
    </div>
  );
}
