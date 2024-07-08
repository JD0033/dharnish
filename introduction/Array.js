let RAM = ["DDR3", "DDR4", "DDR5"];
//Array splice()
console.log(RAM.splice(0, 1, "cpu", "motherboard" ))
let RAM1 = ["DDRY", "DDRZ"];
let RAM2 = RAM.concat(RAM1);
let sample = [[25,26],[36,37],[45,46]];
console.log(sample.flat());
console.log(RAM2);
//Array push()
RAM.push("DDRX");
//Array pop()
RAM.pop();
//Array shift()
// RAM.shift();
//Array unshift()
RAM.unshift("Ryzenx");
// RAM.slice(3);
//Array delete()
// RAM.delete[0];
// console.log(RAM);
//Array join()
console.log(RAM.join("*"));
console.log(RAM);
// console.log(RAM1.slice(3));
//Array toString
console.log(RAM.toString());
//Array length
console.log(RAM.length);
//Array at()
console.log(RAM.at(2));



let computer = ["monitor", "keyboard", "mouse", "Harddisk", "SSD"];
console.log(computer.slice(2));


/**
 * Array Search methods
 * --> Array indexof()
 * --> Array lastindexof()
 * --> Arrar includes()
 * --> Array find()
 * --> Array findIndex()
 * --> Array findLast()
 * --> Array findLastIndex()
 */


//Array indexof()
let bike = ["YAMAHA", "RE", "pulser", "Jawa", "Honda"];
console.log(bike.indexOf("Jawa"));
//Arrat lastindexof()
console.log(bike.lastIndexOf("RE")+1);
//Array includes()
console.log(bike.includes("RS"));


let num = [25, 20, 5, 12, 18, 33, 55, 96];
// let data = num.find(data1);
console.log(num.findLast(y => y > 30));

console.log(num.findIndex(data1));

function data1(value, index, array) {
    return value>25;
}


/**
 * Array sort
 * 
 * -->Array sort()
 * -->Array reverse()
 * -->Array toSorted()
 * -->Array toReversed()
 */

let program = ["python", "java", "html", "css", "bootstrap"];
console.log(program.sort());
console.log(program.reverse());
console.log(program.reverse());
