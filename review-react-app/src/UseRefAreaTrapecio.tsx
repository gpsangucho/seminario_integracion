import {useRef, useState} from "react";
//REVIEW-REAP-APP

export function UseRefAreaTrapecio(){
    const baseMayorRef = useRef<HTMLInputElement | null>(null);
    const baseMenorRef = useRef<HTMLInputElement | null>(null);
    const heighRef = useRef<HTMLInputElement | null>(null);

    const [area,setArea] = useState(0);
    const calcularArea = ()=>{
        const baseMajor = Number(baseMayorRef.current?.value || 0);
        const baseMinor = Number(baseMenorRef.current?.value || 0);
        const height = Number(heighRef.current?.value || 0);
        setArea(((baseMajor*baseMinor)*height)/2);
    }

    return (
        <>
            <input
                ref = {baseMayorRef}
                type = "number"
                placeholder = "Base Mayor"
            />

            <input
            ref = {baseMenorRef}
            type = "number"
            placeholder = "Base Menor"
           />

           <input
           ref = {heighRef}
           type = "number"
           placeholder = "Altura"
          />

           <button onClick={calcularArea}>
           Caldular Area
           </button>

           <p> El Area es: {area || '0'} </p>
        </>
    )
}