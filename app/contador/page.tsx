import Contagem from "./components/MostrarContagem";
import Mais from "./components/Mais";
import Menos from "./components/Menos";
import { ContadorProvider } from "../context/ContadorContext";
import Zerar from "./components/Zerar";
import MaisCinco from "./components/MaisCinco";
import MenosCinco from "./components/MenosCinco ";

export default function Contador() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-10">
      <ContadorProvider>
        <Contagem />
        <div className="flex gap-10 justify-center items-center">
          <Mais />
          <Zerar />
          <Menos />
        </div>
        <div className="mt-30 flex justify-between gap-30 w-auto">
          <MaisCinco />
          <MenosCinco />
        </div>
      </ContadorProvider>
    </div>
  );
}
