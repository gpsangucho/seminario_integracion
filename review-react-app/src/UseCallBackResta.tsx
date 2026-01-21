//callback: guarda funciones
import { useCallback, useState } from "react";

export function UseCallbackResta(){
    const [a,setA] = useState(0);
    const [b, setB] =useState(0);

    const total = useCallback( ()=>
    {
        console.log("Recalculando funcion ...")
        return a-b;
    },[a,b]);

    return(
        <>

        <input
        value={a}
        placeholder="Valor a"
        onChange={(e)=> setA(Number(e.target.value))}
        />

        <input
        value={b}
        placeholder="Valor b"
        onChange={(e)=> setB(Number(e.target.value))}
        />

        <p> la suma es: {total() || '0'}</p>

        </>
    )

}