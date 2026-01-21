//import { useCallback, useMemo,useState } from "react";

type Props = {
    hours: number[];
    //setHours: (hours:number[]) => void;
    setHours:React.Dispatch<React.SetStateAction<number[]>>;
}

export default function WorkDays({hours, setHours}:Props){
    const days = ['Lun', 'Mar', 'Mier','Jue','Vie'];

    const changeHour = (i:number,value:string) => {
        const hour = Number(value) || 0;
        setHours((prev) => 
            prev.map((v,idx)=>(idx ===i? hour : v))
        );
    }
    return(
        <section>
        {days.map((d,i)=>(
            <div key={d}>
                {d}:{" "}
                <input
                    min={0}
                    type="number"
                    value={hours[i]}
                    placeholder="Escriba Texto"
                    onChange={(e)=> changeHour(i, e.target.value)}
            />
                
            </div>
        ))}
        </section>
    )


}