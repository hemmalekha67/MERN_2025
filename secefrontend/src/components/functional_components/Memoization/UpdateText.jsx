import {memo} from "react";
const UpadateText = ({value}) =>{
    console.log("Upadate Number 2");
        return(
        <div>
            <h2>UpdateNumber 2 </h2>
            <h3>value is {value}</h3>
        </div>
    )
    }
    export default memo(UpadateText);