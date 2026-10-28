"use client";

import ContadorContext from "@/app/context/ContadorContext";
import { useContext } from "react";

export default function MenosCinco() {
  const { decrementarCinco } = useContext(ContadorContext);

  return (
    <div className="flex hover:bg-purple-700 cursor-pointer justify-center items-center text-5xl bg-purple-400 w-20 h-20 rounded-full  p-3">
      <button onClick={() => decrementarCinco()}>-5</button>
    </div>
  );
}
