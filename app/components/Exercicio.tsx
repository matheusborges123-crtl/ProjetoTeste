import Caixa from "./Caixa";

interface ExercicioProps {
  nome: string;
  url: string;
}

export default function Exercicio({ nome, url }: ExercicioProps) {
  return (
    <Caixa>
      <a
        href={url}
        className="
          font-bold text-lg text-white
          px-5 py-2 rounded-lg
          bg-white/10
          border border-white/20
          shadow-md
          hover:bg-white/20
          hover:scale-105
          transition-all duration-200
        "
      >
        {nome}
      </a>
    </Caixa>
  );
}
