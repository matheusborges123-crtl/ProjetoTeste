import { MoedaProvider } from "../context/MoedasContext";
import DepositarMoedas from "./components/DepositarMoedas";
import MostrarSaldo from "./components/MostrarSaldo";
import SacarMoedas from "./components/Sacarmoedas";

export default function SistemaMoedas() {
  return (
    <MoedaProvider>
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-950 px-6 py-24 text-white">
        <div className="absolute left-6 top-6">
          <h1 className="text-2xl font-bold tracking-wide">BANCO DIGITAL</h1>
        </div>

        <MostrarSaldo />

        <div className="flex flex-wrap justify-center gap-12">
          <DepositarMoedas />
          <SacarMoedas />
        </div>
      </div>
    </MoedaProvider>
  );
}
