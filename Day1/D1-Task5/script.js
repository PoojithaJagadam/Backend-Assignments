/* var, let, const example 
. Write a small code snippet showing how var, let, and const behave differently.  */

var a=10;
let b=5;
const c=15;
console.log(a); //output: 10;
console.log(b); //output: 5;
console.log(c); //output: 15
{
    a=200;  //we can update 
    console.log(a); //output: 200
}

{
    b=2; //we can update 
    console.log(b); //output: 2
}

 {
    c=-5; //TypeError: Assignment to constant variable. (we cannot update)
    console.log(c);
 } 
console.log(a); //output: 200
console.log(b);  //output: 2


