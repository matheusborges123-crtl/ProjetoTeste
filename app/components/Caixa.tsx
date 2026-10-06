import { ReactNode } from "react";

interface CaixaProps {
  children: ReactNode;
}

export default function Caixa({ children }: CaixaProps) {
  return (
    <div className="
      w-80 h-40
      rounded-xl
      bg-linear-to-br from-[#0D3038] to-[#155B67]
      border border-white/10
      shadow-lg
      flex justify-center items-center
    ">
      {children}
    </div>
  );
}
