"use client";
import { createContext, useRef, useState } from "react";

const MoedasContext = createContext({} as any);
export function MoedaProvider(props: any) {
  const [saldo, setSaldo] = useState(100);
  const [variacao, setVariacao] = useState<number | null>(null);
  const tempo = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mostrarVariacao, setMostrarVariacao] = useState(false);

  function ganharMoedas() {
    if (tempo.current !== null) {
      clearTimeout(tempo.current);
    }
    tempo.current = setTimeout(() => {
      setMostrarVariacao(false);
    }, 1000);
    setSaldo(saldo + 10);
    setVariacao(10);
    setMostrarVariacao(true);
  }

  function gastarMoedas() {
    if (saldo < 25) {
      window.alert("O Saque não pode ser afetuado por nao ter valor suficiente!");
      return;
    } else {
      if (tempo.current !== null) {
        clearTimeout(tempo.current);
      }
      tempo.current = setTimeout(() => {
        setMostrarVariacao(false);
      }, 1000);
      setSaldo(saldo - 25);
      setVariacao(-25);
      setMostrarVariacao(true);
    }
  }

  return (
    <MoedasContext.Provider
      value={{
        saldo,
        variacao,
        mostrarVariacao,
        ganharMoedas,
        gastarMoedas,
      }}
    >
      {props.children}
    </MoedasContext.Provider>
  );
}

export default MoedasContext;
