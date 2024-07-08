//variable creation
//let cpu = " to code";

// cpu = {board: "motherboard",ram: "ddr4", core: "intel"};
// console.log("the parts in cpu" + " "+cpu.board);

/**
 * notes:
 * define object in javascript:
 * -->using an objest literal
 * -->using "new" keyword
 * -->using an object constructor
 */

// cpu = {
//     board: "motherboard",
//     RAM: "DDR4",
//     core: "Intel"
//  };/

// cpu = {};
// cpu.board = "motherboard";
// cpu.RAM = "DDR4";
// cpu.core = "Intel";

// let cpu = new Object();
// cpu.board = "motherboard";
// cpu.RAM = "DDR4";
// cpu.core = "Intel";

/** Accesssing object properties */
// console.log(cpu.board);
// console.log(cpu["RAM"]);


/**
 * Adding object properties
 */
// cpu.graphiccard = "Nvidia";
// console.log(cpu.graphiccard);
/**
 * Deleting properties
 */
// delete cpu["graphiccard"];
// console.log(cpu.graphiccard);

/**
 * Nested objects
 */

// cpu = {
//     board: "motherboard",
//     RAM: "DDR4",
//     core: "Intel",
//     fullsetup: function() {
//         return this.board+" "+this.RAM+" "+this.core;
//     }

    // system: {
    //         s1: "Dell",
    //         s2: "HP",
    //         s3: "ROG"
        
    // }
//  };
//  console.log(cpu.fullsetup());
//  console.log(cpu.system.s2);

/**
 * Object constructor functions 
 * --> create many objects of same type
 * --> To create object type use an object constructor function
 * --> name constructor function with first letter uppercase
 */
/*constructor function for System object */
// function System (board, RAM, core, Graphics) {
//         this.board = board;
//         this.RAM = RAM;
//         this.core = core;
//         this.Graphics = Graphics;
        // this.fullsetup = function(){
        //     return this.board;
        // }
// };
//create a system object
// let cpu = new System("MotherBoard", "DDR4", "Intel", "Nvidia");

// system.prototype.changeGraphics = function(graphicsname) {
    // this.Graphics = graphicsname;
// }

// cpu.changeGraphics("AMD");

// console.log(cpu.board+" "+cpu.RAM+" "+cpu.core+" "+cpu.graphics);
// console.log(cpu.graphics);


/**
 * JavaScript Accessors gethers and setters
 * 
 * --> lang() property used to get language property
 * 
 */

//Getters----get()--->Read
// cpu = {
//             board: "motherboard",
//             RAM: "DDR4",
//             core: "Intel",
//             get MB() {
//                 return this.board.toUpperCase();
//             }        
//         };

// console.log(cpu.MB);

// setter--set()-->write
// cpu = {
//     board: "motherboard",
//     RAM: "DDR4",
//     core: "Intel",
//     set MB(value) {
//          this.core = value;
//     }
    
// };

//set property
// cpu.MB = "AMD Rysen";

// console.log(cpu.core);

let ar1 = {counter : 0};
Object.defineProperty(ar1, "reset",{
    get: function() {this.counter = 0}
});
Object.defineProperty(ar1, "increment",{
    get: function() {this.counter++}
});
Object.defineProperty(ar1, "decrement",{
    get: function() {this.counter--}
});
Object.defineProperty(ar1, "add",{
    set: function(value) {this.counter+=value}
});
Object.defineProperty(ar1, "sub",{
    set: function(value) {this.counter-=value}
});
ar1.reset;
ar1.add = 8;
ar1.add = 7;
ar1.increment;
ar1.decrement;
console.log(ar1.counter);



