import {useRef, useState} from "react";
//REVIEW-REAP-APP

export function UseRefAreaRectangulo(){
    const baseRef = useRef<HTMLInputElement | null>(null);
    const heightRef = useRef<HTMLInputElement | null>(null);

    const [area,setArea] = useState(0);
    const calcularArea = ()=>{
        const base = Number(baseRef.current?.value || 0);
        const height = Number(heightRef.current?.value || 0);
        setArea(base*height);
    }

    return (
        <>

            <input
                ref = {baseRef}
                type = "number"
                placeholder = "Base"
            />

            <input
                ref = {heightRef}
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