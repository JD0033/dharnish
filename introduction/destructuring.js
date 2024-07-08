/**
 * Destructuring for unpack object to variable
 * syntax:
 * let {data1, data2} = objectname;
 * 
 * Destructuring for unpack array and other iterables
 * syntax:
 * let [data1, data2] = objectname;
 */

//Object destructring

const laptop = {
    RAM: "DDR5",
    Graphics: "nvidia",
    SSD: 512
};

let{RAM, Graphics} = laptop;
console.log(RAM+" "+Graphics); 

//String Destructuring
let data = "Javascript";

let [a1, a2, a3, a4, a5] = data;

console.log(a2);

//Array destructuring
const electronics = ["Aurdino", "Gas sensor", "PH sensor", "Raspberry pi"];

// let [data1, data2] = electronics;
let [data1,,,data2] = electronics;//Array skipped value

console.log(data1+" "+data2);

//Destructuring Array position values
const bike = ["TVS", "Honda", "KTM", "Jawa"];

const {[1]:bike1, [3]:bike2} = bike;

console.log(bike1+" "+bike2);

//Array destructuring rest property
const num = [10, 20, 30, 40, 50, 60, 70, 80];

const [a,b, ...rest] = num;

console.log("a is" + a, "b is" + b, "the rest is"+rest);

//map destructuring
const code = new Map ([
    ["Java", 30000],
    ["Javascript", 10000],
    ["Datascience-python", 35000]
]);

let sap = "";
for(const [key, values] of code) {
    sap += " "+ key+ "is" + values;
}

console.log(sap);

//swapping variables
let course1 = "FSD";
let course2 = "DADS";

[course1, course2] = [course2, course1];

console.log(course1+" "+course2);
