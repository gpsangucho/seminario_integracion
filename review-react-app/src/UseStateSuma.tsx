import { useState } from "react";

export function UseStateSuma() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");

  const suma = Number(numero1) + Number(numero2);
  return (
    <>
      <input
        value={numero1}
        placeholder="Escribe un número"
        onChange={(e) => setNumero1(e.target.value)}
      />
      <input
        value={numero2}
        placeholder="Escribe otro número"
        onChange={(e) => setNumero2(e.target.value)}
      />
      <p>La suma es: {suma || "0"}</p>
    </>
  );
}
