locationFinder=(location,time)=>{
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
        if(isLocationValid(location,time)){
            locFound([location,"Found in",time,"millisecs"])
        }
        else{
            locNotFound([location,"not Found in",time,"millisecs"])
        }
    },time)
    })
}
function isLocationValid(loc,time){
    location="Melbourne"
    t=2000
    if(loc===location&&time<=t){
        return true
    }else{
        return false
    }
}
locationFinder("Melbourne",2000).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})