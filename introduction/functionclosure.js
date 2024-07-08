//global variable

dataFunction();

function dataFunction() {
    let x = 8; // local variable
    console.log(x * x);
}

//variable as global

let a = 10;
function sapFunction() {

}
    console.log(a + a);


    //counter using  

    function add() {
        counter += 1;
    }
    
    add();

    add();

    add();


    console.log("the counter is "+ counter);