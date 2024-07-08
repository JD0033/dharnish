
/*
Arithmetic operators
Assignment operators
Comparison operators
String operators
Logical operators
Bitwise operator
Ternary operator
Type operator

*/


/*
Arithmetic-- +, -, *, /, %, ++-->Increment, --decrement
*/
a = 8;
b = 6;
c = a++ + b++ - --b + b++ - --a + ++a;
console.log(a);
console.log(b);

/*
*/

a = 8;
b = 6;
c = a++ + b++ + b--;
console.log(a);
console.log(b);
console.log(c);

/*
comparison oparators-- >, <, ==, ===, !=, !==, >=, <=
*/

a = 10;
b = 10;
if(a==b)
{
    console.log("true");    
}else {
    console.log("False");
} 



/* 
   logical opator-- &&, ||, !
*/ 

//String oparator---uses ASCII values to compare

let data1 = "A";
let data2 = "B";
let res = data1 < data2;
console.log(res);

//String Addition(Concatination)
let sap1 = "java";
let sap2 = "script";
let sap3 = sap1+" "+sap2;
