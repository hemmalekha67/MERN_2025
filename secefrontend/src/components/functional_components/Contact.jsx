import React from 'react'
import { useState } from 'react'
/*var a=10*/

const   Contact =() => {
  // var array=[10,20];
  // var [a,b]= array;
  var [num,setNum]= useState(0);
    return (
    <div>
      <h2>Welcome to Contact Page</h2>
      <h3>This is a State Example</h3>
      <h4>Number is {num}</h4>
      <button onClick={() =>setNum(num+1)}>+</button>
    </div>
  );
}
export default Contact;