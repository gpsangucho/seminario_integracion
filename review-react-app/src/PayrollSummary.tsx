type Props = {
    totalHours:number;
    extra:number;
    pay:number;
}

export default function PayrollSummary({totalHours,extra,pay}:Props){
    return(
        <section>
        <h2> Resumen</h2>
        <p> Total horas {totalHours}</p>
        <p> Horas extras {extra}</p>
        <p>Pago Total ${pay.toFixed(2)}</p>
        </section>
    )

}