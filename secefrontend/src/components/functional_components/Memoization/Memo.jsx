import {useState} from "react";
import UpadateNumber from "./UpdateNumber";
import UpadateText from "./UpdateText";

const Memo = () =>{
    var [num,setNum]=useState(0);
    var [num1,setNum1]=useState(0);
return(
    <div>
        <h2>This page is meant for  Optimization process using react.memo </h2>
        <UpadateNumber value={num}/>
        <button onClick={() => setNum(num+1)}>+</button>
        <UpadateText value={num1}/>
        <button onClick={() => setNum1(num1+1)}>+</button>
    </div>
)
}

export default Memo;