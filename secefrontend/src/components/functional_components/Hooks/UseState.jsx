import { useState } from "react";
var UseState =() =>{
    var initialValue=0;
    var [num,setNum]=useState(initialValue)
    return (<div>
<h1>This is Usestate example</h1>
<button onMouseOver={()=> setNum(num-1)}>-</button>
<h4>The num is {num}</h4>
<button onKeyDown={() =>setNum(num+1)}>+</button>
<button onDoubleClick={() =>setNum(initialValue)}>Reset</button>
    </div>
    )
}
export default UseState;