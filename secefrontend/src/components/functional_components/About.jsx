import { useState } from "react";

//Event handling
const About=()=>{
    var [text,setText]=useState("Hemma");
    function handleText(){
        setText()
    }
    return(
        <div>
            <h2>Hello,This is Hemma Lekha</h2>
            <h2>Textarea:
            </h2>
            <textarea value={text}  onChange={(event) =>setText(event.target.value)}/>
            <p>The text is {text}</p>
        </div>
    );
};
export default About;