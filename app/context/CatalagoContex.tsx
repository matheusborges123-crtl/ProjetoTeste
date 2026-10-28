"use client";

import { createContext } from "react";
import { Produto } from "../data/model/Produto";
import produtos from "../data/constants/produtos";

interface CatalagoContextProps {
  produtos: Produto[];
}

const CatalagoContext = createContext<CatalagoContextProps>({} as CatalagoContextProps);

export function CatalagoProvider(props: any) {
  return <CatalagoContext.Provider value={{ produtos }}>{props.children}</CatalagoContext.Provider>;
}

export default CatalagoContext;
