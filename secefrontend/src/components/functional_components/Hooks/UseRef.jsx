import { useRef, useState ,useEffect} from "react";

const UseRef =() =>{
    var [text,setText]= useState("");
    var prevRender = useRef();
    useEffect(()=>{
        prevRender.current=text
    },[text])
        return(
        <div>
            <h2>This page is meant for the Useref Hook</h2>
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
            <h4>The text is {text}</h4>
            <h5>The previous render text is {prevRender.current}</h5>
        </div>

    )

}
export default UseRef;