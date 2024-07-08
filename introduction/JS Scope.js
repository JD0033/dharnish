//scope-->2 types
/*
--> Block scope
--> Global scope
*/


/*
NOTE:
--> before ES6--introduced in 2015 there is no block scope concept

--> javascript has global scope and function scope 

*/

// syntax:
/*
{
    variable variable_name = value; //variable(let, const)
}
*/
var X= 89;
{
    var X = 55;
    console.log(X);
}
//let y=64;
{
    let y = 96;
    console.log(y);
}

const h = 47;
{
const h = 12;
}
console.log(h); 
/*
--> let and const have block space
--> let and const cannot be redeclared
--> let and const must be declared  before use
--> let and const cannot bind to "this" */