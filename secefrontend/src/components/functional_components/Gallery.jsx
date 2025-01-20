import React from "react";

const Gallery=(props)=>{
    return(
        <div>
            <h2>This is {props.page} page</h2>
            <img src="/Secelogo.jpeg" alt="SECE Logo"></img>
            <h2>The image is {props.image}</h2>
        </div>
    );
};
export default Gallery;