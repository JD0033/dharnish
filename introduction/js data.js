window.alert("external script info");
/*
datatypes-8
-->String
-->Number
-->Bigint
-->Boolean
-->Undefined
-->Null
-->Symbol
-->Object
 */


//Arithmetic operation
// +, -, *, /, %


//Variables
/*
-->automatically
-->var---->1995 to 2015
-->let---->2015 to present
-->const---->2015 to present
 */


a = 20;
b = 30;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.table([{a:5, b:15},{a:1, b:2, c:'w'}]);
console.table([{a:45, b:88}, {a:66, b:46, c:'R'}], ["a", "b"]);
console.time("totalExecutionTime");
console.time("executionTime");
for(let i=0; i<10; i++) {
    console.timeLog("executionTime");
}
console.timeLog("totalExecutionTime");
