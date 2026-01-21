//useMemo: almacena el valor

import {useState, useMemo} from "react";
//REVIEW-REAP-APP

export function UseMemoTotal(){

    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);

    const total = useMemo(()=>
    {
        console.log("Recalculamos total");
        return price*qty;
    },[price,qty]);

    return (
        <>

        <input
            value = {price}
            placeholder = "Precio"
            onChange={(e)=>setPrice(Number(e.target.value))}
        />

        <input
            value = {qty}
            placeholder = "Cantidad"
            onChange={(e)=>setQty(Number(e.target.value))}
        />
           <p> El total es: {total || '0'} </p>
        </>
    )
}