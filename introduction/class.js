class laptop{
    constructor (name, year){
        this.name =name;
        this.year = year;
    }
    age(){
const date = new Date();
return date.getFullYear() - this.year;
}
}
let lap1 = new laptop("Asus",2012);
let lap2 = new laptop("dell",2019);
console.log(lap1.name+" "+lap1.year);
console.log(lap2.name+" "+lap2.year);
console.log(lap1.age());