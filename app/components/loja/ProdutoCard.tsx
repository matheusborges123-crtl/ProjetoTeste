import CarrinhoContext from "@/app/context/CarrinhoContext";
import { Produto } from "@/app/data/model/Produto";
import Real from "@/app/utils/Real";
import { IconShoppingCart, IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useContext } from "react";

interface ProdutoCardProps {
  produto: Produto;
}
export default function ProdutoCard(props: ProdutoCardProps) {
  const { produto } = props;
  const { adicionarItem } = useContext(CarrinhoContext);
  return (
    <div className="flex overflow-hidden flex-col gap-3 bg-black p-2 ">
      <Image
        src={produto.imagem}
        alt="Imagem do produto"
        width={300}
        height={150}
        className="rounded-md"
      />

      <div className="flex justify-between items-center px-4">
        <span className="font-black text-xl ">{produto.nome}</span>
        <span className="text-green-400">{Real.format(produto.preco)}</span>
      </div>
      <p className="font-medium text-sm text-zinc-400 px-4">{produto.descricao}</p>
      <button
        className=" flex justify-center gap-2 btn-info"
        onClick={() => adicionarItem(produto)}
      >
        <IconShoppingCartPlus /> Adicionar
      </button>
    </div>
  );
}
