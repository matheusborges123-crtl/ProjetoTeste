import Carrinho from "../components/loja/Carrinho";
import Catalago from "../components/loja/Catalago";
import { CarrinhoProvider } from "../context/CarrinhoContext";
import { CatalagoProvider } from "../context/CatalagoContex";

export default function Loja() {
  return (
    <CarrinhoProvider>
      <CatalagoProvider>
        <div className="flex flex-col p-7 gap-4">
          <Carrinho></Carrinho>

          <Catalago></Catalago>
        </div>
      </CatalagoProvider>
    </CarrinhoProvider>
  );
}
