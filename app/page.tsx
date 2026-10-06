import Exercicio from "./components/Exercicio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="text-white bg-[#12454F] flex justify-center p-5 font-bold">
        LISTA DE EXERCICIOS PARA PRATICAR O REACT
      </div>

      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <div className=" h-100 w-350 flex justify-center items-center gap-10">
          <Exercicio nome="Contador" url="./contador"></Exercicio>
          <Exercicio nome="Lista" url="./lista"></Exercicio>
          <Exercicio nome="Saudacao" url="./saudacao"></Exercicio>
          <Exercicio nome="Tarefas" url="./tarefas"></Exercicio>
          <Exercicio nome="Countdown" url="./countdown"></Exercicio>
        </div>
      </div>
    </div>
  );
}
