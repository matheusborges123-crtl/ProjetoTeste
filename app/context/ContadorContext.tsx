"use client";
import { createContext, useEffect, useState } from "react";

const ContadorContext = createContext({} as any);

export function ContadorProvider(props: any) {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    if (numero - 1 < 0) {
      window.alert("Nao e possivel atribuir contagem negativa");
      setNumero(0);
    } else {
      setNumero(numero - 1);
    }
  }

  function zerar() {
    setNumero(0);
  }

  function incrementarCinco() {
    setNumero(numero + 5);
  }

  function decrementarCinco() {
    if (numero - 5 < 0) {
      window.alert("Nao e possivel atribuir contagem negativa");

      setNumero(0);
    } else {
      setNumero(numero - 5);
    }
  }

  return (
    <ContadorContext.Provider
      value={{
        numero,
        incrementar,
        incrementarCinco,
        decrementarCinco,
        decrementar,
        zerar,
      }}
    >
      {props.children}
    </ContadorContext.Provider>
  );
}

export default ContadorContext;
