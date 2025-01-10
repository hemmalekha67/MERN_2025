async function asAw(){
    setTimeout(()=>{
        return("Inside Timeout");
    },5000)
    //return "this is async example"
}
asAw().then(function(output){
    console.log(output);
})
//console.log(asAw())