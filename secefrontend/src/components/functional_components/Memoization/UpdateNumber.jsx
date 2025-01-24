import {memo} from "react";
const UpadateNumber = ({value}) =>{
    console.log("Updating Number 1"); 
    return(
        <div>
            <h2>Update Number 1 </h2>
            <h3>Value is {value}</h3>
        </div>
    )
    }
    export default memo(UpadateNumber);