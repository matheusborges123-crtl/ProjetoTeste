"use client";

import ContadorContext from "@/app/context/ContadorContext";
import { useContext } from "react";

export default function Contagem() {
  const {numero} = useContext(ContadorContext);

  return (
    <div className="flex justify-center items-center bg-blue-400 w-30 h-30 rounded-full p-3">
      <div className="text-4xl font-black">{numero}</div>
    </div>
  );
}
