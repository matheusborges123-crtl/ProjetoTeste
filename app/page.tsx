import Exercicio from "./components/template/Exercicio";

import {
  IconCalculator,
  IconList,
  IconMessageCircle,
  IconChecklist,
  IconClock,
  IconCoin,
  IconShoppingBagCheck,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="text-white bg-[#12454F] flex justify-center p-5 font-bold">
        LISTA DE EXERCICIOS PARA PRATICAR O REACT
      </div>

      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <div className="h-100 w-350 flex justify-center items-center gap-10">
          <Exercicio
            nome="Contador"
            url="/contador"
            icone={<IconCalculator size={24} stroke={1.8} />}
          />

          <Exercicio nome="Lista" url="/lista" icone={<IconList size={24} stroke={1.8} />} />

          <Exercicio
            nome="Saudacao"
            url="/saudacao"
            icone={<IconMessageCircle size={24} stroke={1.8} />}
          />

          <Exercicio
            nome="Tarefas"
            url="/tarefas"
            icone={<IconChecklist size={24} stroke={1.8} />}
          />

          <Exercicio
            nome="Countdown"
            url="/countdown"
            icone={<IconClock size={24} stroke={1.8} />}
          />

          <Exercicio
            nome="Banco"
            url="/sistema-moedas"
            icone={<IconCoin size={24} stroke={1.8} />}
          />

          <Exercicio
            nome="Loja"
            url="/loja"
            icone={<IconShoppingBagCheck size={24} stroke={1.8} />}
          />
        </div>
      </div>
    </div>
  );
}
