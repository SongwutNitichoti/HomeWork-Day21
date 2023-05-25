import React from 'react'
import { useState } from "react"
import '../App.css';

const BMI = () => {
    const [Weight, setWeight] = useState<number>(0);
    const [Result, setResult] = useState<number>(0);
    const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setWeight(+event.target.value)
        
        
    }
    
    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("Submitted");
    }

    const showResult = ()=>{
        const total = Weight * 2.2 *30/2
        setResult(total)
    }
    

    return (
        <>
        <div>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <form onSubmit={onSubmit}> 
            <h2>{Result} มล.</h2>     
            <input type="text" id="weight" name="name" onChange={onChangeWeight} placeholder='น้ำหนักของคุณ (กิโลกรัม)' /><br/>
            <button type="submit" onClick={showResult}>คำนวณ</button>
            </form>
        </div>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default BMI