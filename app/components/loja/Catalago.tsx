"use client";

import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import CatalagoContext, { CatalagoProvider } from "@/app/context/CatalagoContex";
import { useContext } from "react";

function ConteudoCatalago() {
    const { produtos } = useContext(CatalagoContext);

    function renderizarProdutos() {
        return produtos.map((prod) => {
            return <ProdutoCard key={prod.id} produto={prod} />;
        });
    }

    return (
        <Area titulo="Catalago" cor="purple">
            <div className="flex flex-wrap justify-around gap-4">
                {renderizarProdutos()}
            </div>
        </Area>
    );
}

export default function Catalago() {
    return (
        <CatalagoProvider>
            <ConteudoCatalago />
        </CatalagoProvider>
    );
}
