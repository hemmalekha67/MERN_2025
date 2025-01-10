
/*
Two types of looping
1. Normal loopig
->for
->while
->do...while
2.bit Advanced looping
->for in
->for of
->for each
*/

//for in loop
var a=[10,20,30]
var b={"count":70,"abs":1}
for (let i in b){
    console.log(i,b[i])
    //console.log(i,b.i)
    console.log(i,b.abs)                                   
}

set=new Set(["hello",1,2,"SECE","44",2,"hello","SECE",5])
for(let i in set){
    console.log("Loop is running")
    console.log(i)
}

//for of loop
for(let [i,j] of Object.entries(b)){
    console.log([i,j]);
}