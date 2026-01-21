import { useState, useMemo } from 'react'
import { UseCallbackResta } from './UseCallBackResta'
import './App.css'
import WorkDays from './WorkDays'
import PayrollSummary from './PayrollSummary'
import { UseStateSuma } from './UseStateSuma'
import { UseStateSuma2 } from './UseStateSuma2'
import { UseMemoTotal } from './UseMemoTotal'
import { UseRefAreaRectangulo } from './UseRefAreaRectangulo'
import { UseRefAreaTrapecio } from './UseRefAreaTrapecio'

function App() {

    const[hours,setHours] =useState<number[]>([0,0,0,0,0])
    const rate = 5; //valor por hora

    const payroll = useMemo(()=>{
      const totalHours = hours.reduce((sum,h) => sum+h,0);
      const extra = Math.max(0,totalHours-40);
      const pay = Math.min(totalHours-40)*rate+extra*1.5;
      
      return { totalHours, extra, pay };  
    },[hours]
  )
    return (
    <>
      <UseStateSuma/>
      <UseStateSuma2/>
      <UseMemoTotal/>
      <UseCallbackResta/>
      <UseRefAreaRectangulo/>
      <UseRefAreaTrapecio/>

      <div>
        <WorkDays hours={hours} setHours={setHours}/>
        <PayrollSummary
        totalHours={payroll.totalHours}
        extra={payroll.extra}
        pay={payroll.pay}/>
      </div>
    </>
  )
}

export default App
