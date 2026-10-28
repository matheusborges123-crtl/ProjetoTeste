"use client";

import { createContext, useState } from "react";
import { Produto } from "../data/model/Produto";
import ItemCarrinho from "../data/model/ItemCarrinho";

interface CarrinhoContextProps {
    itens: ItemCarrinho[];
    valorTotal: number;
    adicionarItem: (produto: Produto) => void;
    removerItem: (produto: Produto) => void;
    limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as CarrinhoContextProps);

export function CarrinhoProvider(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(produto: Produto) {
    const item = itens.find((i) => i.produto.id === produto.id) ?? { produto, quantidade: 0 };
    const novoItem = { ...item, quantidade: item.quantidade + 1 };
    const outrosItems = itens.filter((i) => i.produto.id !== produto.id);
    setItens([...outrosItems, novoItem].sort(ordernarItem));
  }

  function removerItem(produto: Produto) {
    const novosItems = itens
      .map((item) => {
        return item.produto.id === produto.id ? { ...item, quantidade: item.quantidade - 1 } : item;
      })
      .filter((item) => item.quantidade > 0);
    setItens(novosItems);
  }

  function calcularValorTotal() {
    return itens.reduce((total: number, item: ItemCarrinho) => {
      return total + item.quantidade * item.produto.preco;
    },0);
  }

  function ordernarItem(a: ItemCarrinho, b: ItemCarrinho) {
    return a.produto.nome > b.produto.nome ? -1 : 1;
  }

  function limparCarrinho () {
    setItens([])
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        valorTotal: calcularValorTotal(),
        limparCarrinho
      }}
    >
      {props.children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoContext;
