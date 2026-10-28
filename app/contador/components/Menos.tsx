"use client";

import ContadorContext from "@/app/context/ContadorContext";
import { useContext } from "react";

export default function Menos() {
  const { decrementar } = useContext(ContadorContext);
  return (
    <div className="flex hover:bg-red-700 cursor-pointer justify-center items-center text-5xl bg-red-400  w-20 h-20 rounded-full p-3">
      <button onClick={() => decrementar()}>-</button>
    </div>
  );
}
