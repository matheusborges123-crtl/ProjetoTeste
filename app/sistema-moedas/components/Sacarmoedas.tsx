"use client";

import MoedasContext from "@/app/context/MoedasContext";
import { useContext } from "react";
import { IconArrowDownLeft } from "@tabler/icons-react";

export default function SacarMoedas() {
  const { gastarMoedas } = useContext(MoedasContext);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => gastarMoedas()}
        className="flex w-48 items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-blue-700"
      >
        <IconArrowDownLeft size={26} />
        SACAR
      </button>
    </div>
  );
}
