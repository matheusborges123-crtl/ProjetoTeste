"use client";

import { useContext } from "react";
import MoedasContext from "../../context/MoedasContext";
import { IconCreditCard, IconCoins } from "@tabler/icons-react";

export default function MostrarSaldo() {
  const { saldo, variacao, mostrarVariacao } = useContext(MoedasContext);

  return (
    <div className="flex w-96 max-w-full flex-col gap-6 rounded-2xl border border-white/10 bg-[#12454F] p-8 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/70">Sistema de recompensas</p>

        <IconCreditCard size={40} stroke={1.5} />
      </div>

      <div className="h-px bg-white/20" />

      <div className="flex flex-col gap-2">
        <p className="text-base text-white/70">Saldo disponível</p>

        <div className="flex flex-wrap items-center gap-3">
          <IconCoins size={34} stroke={1.5} className="text-yellow-400" />

          <span className="text-4xl font-bold tracking-tight">{saldo}</span>

          {variacao !== null && (
            <span
              className={`${variacao > 0 ? "text-green-500" : "text-red-500"} ${
                mostrarVariacao ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {variacao !== null ? (variacao > 0 ? `+${variacao}` : variacao) : ""}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-white/50">
        <span>CONTA DIGITAL</span>
        <span>•••• 2026</span>
      </div>
    </div>
  );
}
