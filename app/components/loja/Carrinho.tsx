"use client";

import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/app/context/CarrinhoContext";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import Real from "@/app/utils/Real";
import { IconX } from "@tabler/icons-react";

export default function Carrinho() {
  const { itens, limparCarrinho, valorTotal } = useContext(CarrinhoContext);

  return (
    <div className="flex flex-col">
      <Area titulo="Carrinho" cor="green" sumario={Real.format(valorTotal)}>
      <div className="flex flex-row flex-wrap items-start justify-center gap-4">
          {itens.length === 0 ? (
            <CarrinhoVazio />
          ) : (
            itens.map((item) => (
              <ItemCarrinhoCard item={item} key={item.produto.id}>
                {item.produto.nome}
              </ItemCarrinhoCard>
            ))
          )}
        </div>

        {itens.length > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={limparCarrinho}
              className="btn-danger flex items-center justify-center gap-2"
            >
              <IconX size={18} />
              Limpar
            </button>
          </div>
        )}
      </Area>
    </div>
  );
}
