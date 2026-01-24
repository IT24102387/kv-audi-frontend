import { useState } from "react"

export default function Testing(){
    const[count,setCount]=useState(0)
    return(
        <div>
            <h1>{count}</h1>

            <button onClick={
                ()=>{
                    
                    const newCouunt=count+1
                    setCount(newCouunt)
                }
            }>
                count

            </button>
        </div>
    )

}