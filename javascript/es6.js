// ES6 => ECMA Script standard 6
//1.variable declarations - scope
//2.scope of variables
//var - global scope
//let - local / block scope
//const - global scope
var a = 10;
const con= 3.14;
console.log(a);
console.log(con);
{   
    var a = 20; // same as a = 20 
    let b = 30;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(con);
//console.log(b); //reference error 
//3.class and objects
//->cannot directly use console.log statemnt inside class
class ClassEg{
    constructor(){
        this.a = 10;
        //a = 10; //error in both cases
    }
    //4.Arrow function
    name = (e) => {
        //console.log(a);//empty
        console.log(this.a);
    }
    
}
obj = new ClassEg();
//console.log(obj.a);
console.log(obj.name());//return undefined ad it has no return statement
//5. Ternary operators
a = 10;
console.log(a % 2 == 0 ? "even" : "odd");
//6.spread operator
a = [10,20,30,40,50];
b = [60,70,80,90];
c = [...b,a];//[ 60, 70, 80, 90, [ 10, 20, 30, 40, 50 ] ]
//c = [...b,...a];//[
             //       60, 70, 80, 90, 10,
              //      20, 30, 40, 50
              //  ]
console.log(b,a);//[ 60, 70, 80, 90 ] [ 10, 20, 30, 40, 50 ]
console.log(c);
//7. rest operator
function restEg(...arg){
    console.log(arg);
}
function restEg(a,b,...arg){
    console.log(a);
    console.log(b);
    console.log(arg);
}
restEg(10,20,30,40,50); 
//8. Destructing operator
var array = [10,20,30];
var [a,b,c,d] = array;
console.log(a,b,c,d); 
//9.Hoisting
//variable hoisting
console.log(a); //if put const(it can be initialized only at the time of declaration) or let 'a' then it throw reference error : a cannot access before initialization 
var a = 10;
console.log(a);
//types of hoisting
console.log(a); 
var a = 10;
console.log(b); 
let b = 10;
console.log(c); 
const c = 10;
//function hoisting
console.log(func());
function func(){
    return 10;
}