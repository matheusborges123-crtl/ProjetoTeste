import CarrinhoContext from "@/app/context/CarrinhoContext";
import ItemCarrinho from "@/app/data/model/ItemCarrinho";
import Real from "@/app/utils/Real";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useContext } from "react";

interface ItemCarrinhoCardProps {
  item: ItemCarrinho;
  children: React.ReactNode;
}
export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps) {
    const { item } = props;
    const { adicionarItem, removerItem } = useContext(CarrinhoContext);

    return (
        <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-3 transition-colors hover:bg-black/40">

            <span className="min-w-0 flex-1 truncate font-bold text-white">
                {item.produto.nome}
            </span>

            <div className="flex shrink-0 items-center gap-2">
                <button
                    onClick={() => removerItem(item.produto)}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-red-500/20 text-red-400 transition-colors hover:bg-red-500 hover:text-white"
                    aria-label={`Diminuir quantidade de ${item.produto.nome}`}
                >
                    <IconMinus size={14} />
                </button>

                <span className="min-w-5 text-center font-bold text-white">
                    {item.quantidade}
                </span>

                <button
                    onClick={() => adicionarItem(item.produto)}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-green-500/20 text-green-400 transition-colors hover:bg-green-500 hover:text-white"
                    aria-label={`Aumentar quantidade de ${item.produto.nome}`}
                >
                    <IconPlus size={14} />
                </button>
            </div>

            <div className="w-24 shrink-0 rounded-lg bg-blue-500/15 px-2 py-2 text-right text-sm font-black text-blue-300">
                {Real.format(item.produto.preco * item.quantidade)}
            </div>

        </div>
    );

}

